class coffee{
    flavour:string;
    price: number

    constructor (flavour   : string, price: number){
        this.flavour = flavour
        this.price = price
    }
}

const matcha = new coffee("matcha", 100)
matcha.price = 100

class student{
    public name: string = "anan"

    private phoneNum : number = 123

    reveal(){
        return this.phoneNum
    }

    protected dob: string = "aug 2"
}

const c = new student()
class stdDetails extends student{
    getDob(){
        return this.dob
    }
}

class wallet{
    #balance = 1000
    getbal(){
        return this.#balance
    }
}

const w = new wallet()
 
class cupSize{
    readonly capacity: number = 25

    constructor (capacity: number){
        this.capacity = capacity
    }
}
 
class food{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

     set sugar(value: number){
        if(value>3) throw new Error('too sweet');
        this._sugar = value
    }
}

const f = new food()
f.sugar = 2

class cmpny{
    static name = "titan"

    constructor (public flavour: string){}
}

console.log(cmpny.name); //directly accssed in class

abstract class drink{
    abstract make():void
}

class myCffe extends drink{
    make(): void {
        console.log("Brewing the coffee!")
    }
}

//composition

class ac{
    heat(){}
}

class comfort{
    constructor (private heating: ac){}

    make(){
        this.heating.heat
    }
}


