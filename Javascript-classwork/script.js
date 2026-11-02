//console.log("hi")

//function fun(){
//   var a ="hello"
//  console.log(a);}
//fun()
//console.log(a)
//== vs ===
//let a = 10;
//let b = "10";
//console.log(a==b);
//== check only value
//=== check value and datatype

//string
/*let name ="raj";
let age = 18;
let result="my name is "+name+" my age is "+age;*/
//let result=`my name is ${name} my age is ${age}`;
//console.log(result)

/*let username=" Kumari Priya ";
console.log(username.trim());
console.log(username.toUpperCase())
console.log(username.toLowerCase())
console.log(username.indexOf("P"))
console.log(username.includes("kumar"))
console.log(username.slice(5))
console.log(username.split(" "))
console.log(username.trim().split(" "))*/

/*let password="  jsbh0O@kws1123  ";
function checkPassword(password){
password has atleaat 6 characters
one uppercase
one lowercase
one digit
one special symbol*/
/*console.log(password.trim())
if(password.length< 8){
    console.log("password must contain atleat 8 characters")
}
else if(!/[A-Z]/.test(password)){
    console.log("password must contain one uppercase")  
}
else if(!/[a-z]/.test(password)){
    console.log("password must contain one lowercase")
}
else if(!/[0-9]/.test(password)){
    console.log("password must contain one digit")
}
else if(!/[^A-Za-z0-9]/.test(password)){
    console.log("password must contain one special character")
}
else{
    console.log("password is valid")
}
}
checkPassword(password);

console.log(a);
let a="hello";
greet();
function greet(){
    console.log("welcome");
}
function add(a,b){
    let result=a+b
    console.log(result)
}
add(20,10);*/

//implicit conversion
let result="hello"+5;
console.log(result);
console.log(typeof result);

let result1=10-"5";
console.log(result1);
console.log(typeof result1);

console.log(true+5);
console.log(false+5);

let result2="Valueis"+true;
console.log(result2);
console.log(typeof result2);

//explicit conversion
let strNumber1="123";
let num1=Number(strNumber1);
console.log(num1,typeof num1);

let strNumber2="45.08";
let num2=parseFloat(strNumber2);
console.log(num2,typeof num2);

let number2=1234;
let str2=number2+"";
console.log(str2,typeof str2);

let bool1=true;
let num3=Number(bool1);
console.log(num3,typeof num3);

//function to add two numbers
//function declaration
function add1(a,b){
    return add1(10,20); 
}
//arrow function
let addd=(a,b)=>{
    return a+b;}

//function expression
let add=function(a,b){
    return a+b;
}
let mul=function(a,b){
    return a*b;
}

//higher order function
function calculate(a,b,callback){
    return callback(a,b);
}
let sum=calculate(10,20,add)
let multi=calculate(10,20,mul);
let sub=calculate(10,20,(a,b)=>{
    return a-b;
})
console.log(sub);
console.log(sum);
console.log(multi);

//map function
let arr=[1,2,3,4,5,6];
let fun=(x,idx,arr)=>{//value,index,array
    return x*2;
};
let res =arr.map(fun);
console.log(res);

//array filter function  
let res1=arr.filter((X)=>{
    return X%2==0;
})
console.log(res1);

let arr1=["Apple","mango","banana","apple","kiwi"];
let res2=arr1.filter((X,idx,arr1)=>{//value,index,array
    //let ele=X.toLowerCase();
    //return ele!="apple";
    return X.toLowerCase()!="apple";
})
console.log(res2);

//filter the fruit whose length>5
let arr2=["Apple","mango","banana","apple","apple"];
let res3=arr2.filter((X)=>{
    return X.length>5;
})
console.log(res3);

//filter the age>18
let arr3=[12,45,26,34,6];
let res4=arr3.filter((X)=>{
    return X>18;
})
console.log(res4);

//filter the fruit starting with "A" or "a"
let arr4=["Apple","mango","banana","apple","apple"];
let res5=arr4.filter((X)=>{
    return X.toLowerCase().startsWith("a")})
console.log(res5);
//objects
let student={
    id:"101",
    name:"rahul",
    marks:90,
    display:()=>{
        console.log ('my name is ${this.name} and got marks ${this.marks}')
    }
}
//bracket notation
let username=student["name"];
//dot notation
let usermarks=student.marks;
console.log(usermarks);
console.log(username);
student.display();

//functional constructor
function Student(id,name,marks){
    this.id=id;
    this.name=name;
    this.marks=marks;
    this.display1=function(){
    console.log("this is method")
    };
}
let s1=new Student(101,"rahul",75);
let s2=new Student(102,"raj",87);
console.log(s2);
console.log(s1.marks);
s2.display1();
//class

class Student1{
    constructor(id,name,marks){
        this,id=id;
        this.name=name;
        this.marks=marks;
    }
    Display=()=>{
        console.log("this is a student method")
    }
    getMarks=()=>{
        return this.marks;
    }
}

let s3=new Student1(103,"richa",79);
let s4=new Student1(104,"ruchi",91);
console.log(s3);
console.log(s4);
s3.Display();

let studentArr=[
    {id:101,name:"raj",marks:"99",gender:"male"},
    {id:102,name:"rahul",marks:"86",gender:"male"},
    {id:103,name:"radhika",marks:"90",gender:"female"},
    {id:104,name:"rahi",marks:"96",gender:"female"},
];
//let fun=
let studentNames=studentArr.map((X)=>{
    return X.name;
})
let studentTitle=studentArr.map((X)=>{
    if(X.gender=="male"){
        return "Mr."+X.name;
    }else{
        return "Miss."+X.name;
    }
})
console.log(studentNames);
console.log(studentTitle);

let Student2={
    id:107,
    name:"rahul",
    isPresent:true,
    address:{
        city:"mathura",
        pincode:12345
    },
    display:function(){
        console.log('my name is ${this.name}')
    }

}
let jsonData=JSON.stringify(Student2);//object->json
console.log(jsonData);

let objData=JSON.parse(jsonData)//json->object
console.log(objData);

let query = "city"
console.log(Student2["address"][query])
console.log(Student2.address.city)
 Student2.display()

console.log(Student2.name)//read
console.log(Student2["name"])
Student2.age=24;//add