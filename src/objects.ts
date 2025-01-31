let employee:{
   readonly id: number, // we use this property to not let teh change 
    name: string,
    retire :(date : Date)=> void
} ={
    id: 90,
   name: '',
   retire: (date: Date) => {
    console.log(date);
}

};
console.log(employee)