import axios from "axios";
import type {AxiosResponse} from "axios";

interface Todo{
    userId: number;
    id: number;
    title: string;
    body: string
}

axios.get("https://example.com/data")
.then(response =>{
    console.log(response.data)
})

const fetchData = async(todo: Todo)=>{
 try{
    const response: AxiosResponse<Todo> = await axios.
    get(
        "https://jsonplaceholder.typicode.com/"
    );
    console.log("Todo", response.data);
 }catch(error: any){
  if(axios.isAxiosError(error)){
    console.log("Axios error", error.message);
    if(error.response){
        console.log(error.response.status);
    }
  }
 }
}

