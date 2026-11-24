let views: string | number =10;

let busSeat :'last' | 'window' | 'middle' | 'front' = "last";

busSeat = "middle";

const orders = ['austin','joy','ram'];
let currentorder: string | undefined;
for(let order of orders){
    if(order=='ram'){
        currentorder= order;
        break;
    }
   
}

console.log(currentorder);