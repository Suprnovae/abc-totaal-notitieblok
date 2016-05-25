// KSF;;Tot en met;Prognose;Realisatie;Verbetering
// ;;;;;
// Winst;;April;20.332;24.948;4.616
// Omzet;;April;41.000;48.735;7.735
// Prive;;April;60.000;45.095;14.905
//
let results = {
  "data": [
    {
      "description": "Winst",
      "predicted": " € 20.332,00",
      "actual": "€ 24.948,00",
      "tablets": [
        { "text": "+ € 4.616,-", "color": "blue" },
        { "text": "April" }
      ],
      "difference": "€ 4.616,-",
      "timespan": "1Q",
      "gauge": 20332/24948,
      "breakdown": {
      }
    },
    {
      "description": "Omzet",
      "predicted": "€ 41.000,-",
      "actual": "€ 48.735,-",
      "tablets": [
        { "text": "€ 7.735,-", "color": "green" },
        { "text": "April 2016" },
      ],
      "difference": "- € 2000.00",
      "timespan": "2015",
      "gauge": 41000/48735,
      "breakdown": {
      }
    },
    {
      "description": "Prive",
      "predicted": "€ 60.000,-",
      "actual": "€ 45.095,-",
      "tablets": [
        { "text": "+ € 14.905,-", "color": "red" },
        { "text": "April 2016" },
        { "text": "D", "color": "orange" }
      ],
      "difference": "+ € 3.8K",
      "timespan": "1 jan - 23 mei",
      "gauge": 1,
      "breakdown": {
      }
    }
  ]
}

export default results;
