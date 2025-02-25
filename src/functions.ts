let Userlogin=(name:string ,email:string,paid:boolean=false)=>{ // :number outside the bracket is the return type of the function
    console.log(name,email,paid);
}
Userlogin("Akshat", " i@gmail.com");

let superheros = ['superman','batman','flash'];
 
superheros.map((hero):string=>{
   return (`heros are ${hero}`);
})
// console.log(superheros); // this will throw an error because superheros is not defined