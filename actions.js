export const LOAD_RECORD = 'LOAD_RECORD';
export const SAVE_RECORD = 'SAVE_RECORD';

export function addRecord(price, currency = 'XTS', description, category, image, datetime = (new Date).toISOString()) {
  return {
    type: SAVE_RECORD,
    content: {
      price: {
        currency: currency,
        value: price,
      },
      description: description,
      datetime: datetime,
      attachment: image,
      category: category,
    }
  };
}
export function initRecord(data) {
  return {
    type: LOAD_RECORD,
    content: data
  };
}