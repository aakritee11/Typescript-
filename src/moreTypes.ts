let response : any = "12";

let numericLength : number =( response as string).length;

type Book = {
    name: string;
}

let bookString = '{"name": "The power of your subconcious mind"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);
const inputElement = document.getElementById("username") as HTMLInputElement;

let value:any;

value = 'rita'
value = ['rita','ram']
value = 2.5
value = 9

value.toUpperCase();

let newValue:unknown;

newValue = 'rita'
newValue= ['rita','ram']
newValue = 2.5
newValue = 9
if(typeof newValue === 'string')
newValue.toUpperCase();



try{}
catch(err){
    if(err instanceof Error){
      console.log(err.message);
    }
    console.log("Error: ", err)
}

const data : unknown = "pass code"
const strData : string = data as string;

type Role = "student" | "teacher" ;
function redirectBasedOnRole(role: Role): void{
    if(role ==="student"){
        console.log("Redirecting to student dashboard");
        return;
    }

    if(role ==="teacher"){
        console.log("Redirecting to teacher dashboard");
        return;
    }
    role;
}

function neverReturn ():never{
    while (true){}
} 