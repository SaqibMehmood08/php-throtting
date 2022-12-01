const alpha=
{
saqib:"mehmood",
aqib:"maik",
father:function()
{  
 return "zahid mehmood";   
},

grand:function()
{ 
 return this.saqib;   
}
}
console.log(alpha.grand());

var person= new Object();

person.name="khan";
person.age=22;
console.log(person);

var student =[
    
     {   name:"saqib", age:32},
     {   name:"aqib", age:23},
      {   name:"khan", age:33},  
    
    
    ];
    console.log(student[0].name);
    
var obj=
{
    alpha:73, beta :"23"
}
obj.alpha=2222;
   console.log(obj);
     
