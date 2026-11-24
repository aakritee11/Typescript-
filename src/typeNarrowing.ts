  function starBucks(kind: string | number){
    if(typeof kind === "string"){
        return `Making ${kind} coffee.`
    }
    return `Order: ${kind}`
  }

  function matchResult (msg?: string){
  if(msg){
   return `Yay won the match! ${msg}`
  }
  return `Runner up`
  }

  class bakery{
    serve(){
        return `Bakery items on way.`
    }
  }

  class bar{
   passOn(){
        return `Drinks on way.`
    }
  }

  function serve (eatery: bakery | bar){
     if(eatery instanceof bakery)
       { 
        return `${eatery.serve()}`;
    }
    return eatery.passOn();
  }

  type order = {
    type : string
    sugar: number
  }

  function isOrder (obj: any): obj is order{
    return(
        typeof obj ==="object" &&
        obj !== null &&
        typeof obj.type ==="string" &&
        typeof obj.sugar ==="number" 
    )
  }

  function serveOrder(item: order| string){
    if(isOrder(item)){
        return `Serving ${item.type} with ${item.sugar} sugar`
    }
    return `Serving custom ${item}`
  }

  type croissant = {type:"plainCroissant"; sugarlevel:number}
  type bagels = {type:"chocolateBagel"; sugarlevel:number}
  type lassi = {type:"plainLassi"; sugarlevel:number}

  type eatery = croissant | bagels | lassi;

  function orderEatery(order: eatery){
     switch(order.type){
        case"chocolateBagel":
        return `chocolate Bagel.`
        break;
        case"plainCroissant":
        return `plain croissant.`
        break;
        case"plainLassi":
        return `plain lassi.`
        break;
     }
  }

  function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every(x => typeof x === "string");
}