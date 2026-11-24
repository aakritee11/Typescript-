type foodOrder = {
    quantity: number
    item: string
    price: number
}

function breakfastOrder (order: foodOrder){
  console.log(order);
}

function dinnerOrder (order: foodOrder){
console.log(order);
}

class brunchOrder implements foodOrder{
    quantity= 4;
    item= "garlic bread";
    price= 200;
}

interface foodAmt{
    size: "small" | "large" |"medium"
}

class snackOrder implements foodAmt{
   size : "small" | "large" |"medium" = "large";
}

type breadType = "plain" | "garlic" | "warm";  //literal types

function orderBread (b:breadType ){
    console.log(b);
}

type drinkType = {size: number}
type extra = {sugar: number}

type drink = drinkType & extra

const cup: drink = {
    size: 5,
    sugar : 3
}

type User = {
    username: string,
    bio?: string //optional
}

const user1: User = {username: "John"}
const user2: User = {username: "John", bio: "freelancer"}
 
type  config = {
    readonly appName: string
    version : number
}

const cfg: config = {
    appName:"rentNepal",
    version : 1
}

// cfg.appName = "videoCalling" //cannot assign again

