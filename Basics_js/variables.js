// const myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// let myTime = Date.now();
// console.log(Math.floor(Date.now()/1000));

const myDay = new Date();
console.log(myDay);

myDay.toLocaleString('default',{
    weekday: "long"
})
