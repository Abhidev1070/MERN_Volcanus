const date = new Date;
const currentdate = date.getDate();
const currentDay = date.getDay();
const year = date.getFullYear();
const month = date.getMonth();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();


console.log(` Today date is = ${currentdate}-${month}-${year}`);
console.log(` Todat time is = ${hour}-${minute}-${second}`);

