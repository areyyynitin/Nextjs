import axios from "axios"
import { title } from "process";

async function  getBlogs(){
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
   return response.data;
}

export default async function page(){
    const blogs = await getBlogs()

    return (
        <>
        <div>Blogs about recoild,redux,zustand</div>
        {/* {JSON.stringify(blogs.title)} */}
        {blogs.map((item:any,id:any) => (
            <li key={id}>{item.id}, {item.title} which is {item.completed ? "done" : "Not done yet"} </li>
        ))}
        </>
    )
}