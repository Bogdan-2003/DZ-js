let addressLat = 10;
let addressLong = 7;
let positionLat = 4;
let positionLong = 2;

const distance = (
  (addressLat - positionLat) ** 2 +
  (addressLong - positionLong) ** 2
) ** 0.5;

console.log(distance);