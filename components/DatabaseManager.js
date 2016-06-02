import SQLite from 'react-native-sqlite-storage';
import MockData from './../data/records';
import { addRecord, initRecord} from '../actions';
/*import basicApp from '../reducers';*/

import store from '../store'

SQLite.DEBUG(true);

var database_name = "Records.db";
var database_version = "1.0";
var database_displayname = "Records Database";
var database_size = 200000;
var data_source = MockData.records;
var db;

function DatabaseManager () {
}

DatabaseManager.prototype.errorCB = function(err) {
  console.log("Error: ",err);
  return false;
}

DatabaseManager.prototype.successCB = function() {
  console.log("SQL executed");
}

DatabaseManager.prototype.openCB = function() {
  console.log("Database OPEN");
}

DatabaseManager.prototype.closeCB = function() {
  console.log("Database CLOSED");
}

DatabaseManager.prototype.deleteCB = function() {
  console.log("Database DELETED");
}

DatabaseManager.prototype.populateDatabase = function(db) {
  var that = this;
  console.log("Database integrity check");
  db.executeSql('SELECT 1 FROM Version LIMIT 1', [],
      function () {
          console.log("Database is ready ... executing query ...");
          db.transaction(that.updateRecords,that.errorCB,function() {
              console.log("Processing completed");
          });
      },
      function (error) {
          console.log("received version error:", error);
          console.log("Database not yet ready ... populating data");
          db.transaction(that.populateDB, that.errorCB, function () {
              console.log("Database populated ... executing query ...");
              db.transaction(that.updateRecords,that.errorCB, function () {
                  console.log("Transaction is now finished");
                  that.closeDatabase();
              });
          });
      });
}

DatabaseManager.prototype.populateDB = function(tx) {
  //console.log("Executing DROP statements");
  tx.executeSql('DROP TABLE IF EXISTS Records;');
  tx.executeSql('DROP TABLE IF EXISTS Version;');
  //console.log("Executing CREATE statements");

  //tx.executeSql('CREATE TABLE IF NOT EXISTS Version( '
  //    + 'version_id INTEGER PRIMARY KEY NOT NULL); ', [], this.successCB, this.errorCB);

  tx.executeSql('CREATE TABLE IF NOT EXISTS Records( '
      + 'record_id INTEGER PRIMARY KEY NOT NULL, '
      + 'description STRING,'
      + 'category STRING,'
      + 'attachment STRING,'
      + 'value_cents BIGINT,'
      + 'value_currency CHAR(3),'
      + 'datetime_string CHAR(29),'
      + 'datetime_epoch DATETIME DEFAULT CURRENT_TIMESTAMP ); ', [], this.successCB, this.errorCB);

  //console.log("Executing INSERT statements");

  for (let i = 0; i < data_source.length; i++) {
    let record = data_source[i];
    let price = record["price"];
    tx.executeSql('INSERT INTO Records (description, category, attachment, value_cents, value_currency, datetime_string) VALUES (?, ?, ?, ?, ?, ?)', [record["description"], record["category"], record["attachment"], price["value"], price["currency"], record["datetime"]]);
  }

  console.log("SQL configuration done");
}

DatabaseManager.prototype.updateRecordsSuccess = function (tx,results) {
  console.log("Query completed");
  console.log(results);
  var len = results.rows.length;

  for (let i = 0; i < len; i++) {
    let row = results.rows.item(i);
    console.log(row);
  }
}

DatabaseManager.prototype.updateRecords = function (tx) {
  console.log("Executing sql...");
  tx.executeSql('SELECT * FROM Records', [6], this.updateRecordsSuccess, this.errorCB);
}

DatabaseManager.prototype.loadAndQueryDB = function() {
  console.log("Opening database ...");
  db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, this.openCB, this.errorCB);
  //this.populateDatabase(db);
  //populateDB
  this.populateDB(db);
}

DatabaseManager.prototype.GetListRecords = function () {
  //db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, this.openCB, this.errorCB);

  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM Records', [], (tx, results) => {
      console.log("Query completed: SELECT * FROM Records");

      console.log(results);

      var len = results.rows.length;
      var arrayRecord = [];
      // сформировать массив объектов .push() -выдать на общем экране
      // ретернуть и в главной конпоненте засетить в сторе

      for (let i = 0; i < len; i++) {

        let row = results.rows.item(i);
        arrayRecord.push({
            price: {
              currency: row.value_currency,
              value: row.value_cents,
            },
            description:row.description,
            datetime:row.datetime_string,
            attachment:row.attachment,
            category:row.category,

        });
       // store.dispatch(addRecord(row.value_cents, row.value_currency, row.description, row.category, row.attachment, row.datetime_string));

      }
      store.dispatch(initRecord(arrayRecord));
    });
  });

}

DatabaseManager.prototype.deleteDatabase = function() {
  console.log("Deleting database ...");
  SQLite.deleteDatabase(database_name, this.deleteCB, this.errorCB);
}

DatabaseManager.prototype.closeDatabase = function() {
  var that = this;
  if (db) {
      console.log("Closing database ...");
      db.close(that.closeCB,that.errorCB);
  } else {
      console.log("Database was not OPENED");
  }
}

module.exports = new DatabaseManager();
