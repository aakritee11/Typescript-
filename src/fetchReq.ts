interface Todo{
    userId: number;
    id: number;
    title: string;
    body: string
}

const fetchData = async(todo: Todo)=>{
 try{
    const response  = await 
    fetch(
        "https://jsonplaceholder.typicode.com/"
    );
    if(!response.ok){
        throw new Error(`HTTP error ${response.status}`);
    }
    const data: Todo = await response.json()   
 }catch(error: any){
 
 }
}