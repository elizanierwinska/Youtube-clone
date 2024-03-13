export const APIKey = 'AIzaSyCQK37cPBKmGluiuBssyXvsnff_yKt0XI4';

export const valueConverter = (value) => {
  if(value > 1000000) {
    //we are using Math.floor() function to get rid of decimals
    return Math.floor(value/1000000) + "M";
  } else if(value >= 1000) {
    return Math.floor(value/1000) + "K";
  } else {
    return value;
  }
}