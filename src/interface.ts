interface food{
    name: string
    price : number
    size?: "medium" | "small"| "large"
}

const burger: food={
    name: "chicken burger",
    price: 150,
    size: "medium"
}
interface shop{
    readonly id: number
    name: string 
}

const s: shop ={
    id: 2, //cannot be changed later
    name: "fyp"
} 

interface discountCalc{
    (price: number):number
}

const apply50: discountCalc=(p)=> p*0.5

interface teaMachine{
    start():void;
    stop(): void

}

const machine: teaMachine ={
    start() {
        console.log("start")
    },
    stop() {
        console.log("stop")
    },
}


//index signature

interface teaRating {
    [flavor: string]: number
}

const ratings: teaRating = {
    ginger: 4,
    cardamom: 5
}

//merging feature
interface user{
    name: string
}

interface user{
    age: number
}
const u: user ={
    name: "anan",
    age: 15
}

//extend
interface A{a: string}
interface B{b: string}

interface C extends A, B{}



