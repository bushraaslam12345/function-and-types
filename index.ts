/ function
// types of function
// name function 

function bushraAslam(){
    let total = 34+45+56+45
    return total
}

let name1:number=bushraAslam();
console.log(name1);

// Parameter type annotation
function greet(name: string="bushra aslam") {
    console.log("Dear, " + name.toUpperCase() + " @");
  }
  greet();
//  return type

  function getFavoriteNumber(): number {
    return 34+34;
  }
//   let number1:number=getFavoriteNumber();
//   console.log(number1);
console.log(getFavoriteNumber());

//   example 2 of parameter type annotation
  function greetings(name:string="bushra aslam"){
    console.log("dear nephew ," + name.toUpperCase() + " ", "come to my home as soon as possible");
  }
 greetings();

 //Named function
function add(x: number, y: number): number {
    return x+y;

}
// /Anonymous function
let myAdd1 = function(x: number, y: number): number { 
				return x+y; 
};

//Anonymous function with explict type
let myAdd2: (b:number, r:number)=>number = 	function(x: number, y: number): number { 
    return x+y; 
};
// lamda functions closure function
// syntax ()=>{};
let myName = () :string =>{
    return" bushra aslam"

}
console.log(myName());




