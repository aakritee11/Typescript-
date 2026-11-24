const name: string[]= ["gyan", "arati"]
const rollno: number[]=[4,2];

const gpa: Array<number> = [3.5,3.6]

type studentDetails = {
    name: string;
    rollno: number
}

const student: studentDetails []= [
{name:"jitendra", rollno:21},
{name:"birbal", rollno:11}
]

//readonly array
const cities: readonly string[]=["ktm","laliptur","biratnagar"]

//multidimensional array

const table: number[][]=[
    [1,2,4],
    [3,2,1]
]

//tuples
let studentTuple: [string,number];
studentTuple = ["anan", 15]

let userInfo: [string,number,boolean]
userInfo = ["ram",10, true];

 const location: readonly [number, number] = [24, 37] //cannot be changed

 //named tuple
 const foodItems:[name:string, price: number]= ["chocolate", 45]

 //enum 
 enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
 }

 const size = cupSize.MEDIUM;


 enum status{
    PENDING=100,
    SERVED ,//101
    CANCELLED //102
 }

 enum teaType{
    MASALA= "masala",
    GINGER = "ginger"
 }

 function makeTea(type: teaType){
    console.log(`Making: ${type}`)
 }

 makeTea(teaType.MASALA);

 // heterogenous enum

 enum random{
    ID=1,
    NAME="Coffee"
 }

 const enum Sugar{
    LOW=1,
    MEDIUM= 2,
    HIGH = 3
 }

 let t: [string,number]=["tea",15];
 t.push("coffee") // tuples are kinda array
