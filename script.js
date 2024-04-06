//anothe loop
//1. for-off use- string and array
/*let str="student";
let size=0;
for(let val of str){ //not seen intilation, updation,not stopping contion
  console.log("val=",val);
  size++;
}
console.log("string size=",size);*/
//for-in loop -> use in object
let student={
  name:"Anjali kumari",//all student value
  age:20,
  cgpa:7.5,
  ispass:true,
}
for(let key in student){
  console.log("key=",key,"value", student[key]);
}