const tea = {
    name: "black tea",
    price: 25,
    isHot: true
}


//declaring object types

let Tea:{
    name: string;
    price: number;
    isHot: boolean
}

Tea = {
   name: "string",
    price: 40,
    isHot: false
}

type Cup = {size: string}

let smallCup : Cup = {size:"200ml"}
let largeCup  = {size:"500ml", material: "glass"}

smallCup = largeCup
//duck typing 

type brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabic"}
const teaBrew : brew = coffee

//datatype split

type item = {
    name: string
    quantity: number
}

type Address = {
    street : string,
    pin: number
}

type order = {
    id: number;
    items: item[];
    address: Address
}

type coffee = {
    name: string;
    price: number;
    isHot: boolean
}

const updateCoffee = (updates: Partial<coffee>)=>{
    console.log("updating coffee with",updates)
}

updateCoffee({price: 100})
updateCoffee({})

type bread = {
    name?: string;
    price?: number
}

const updateBread = (updates: Required<bread>)=>{
    console.log(updates);
}

updateBread({
    name:"garlic bread",
    price: 100
})

type food ={
    name: string;
    price: number
}

const updateFood = (updates: Pick<food, "name">)=>{
    console.log(updates);
}



