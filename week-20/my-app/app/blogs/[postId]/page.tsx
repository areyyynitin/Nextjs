import axios from "axios"

export default async function  Post({params}:{
    params: Promise<{
        postId:string
    }>
})
{
    const post = (await params).postId   // postId catch the folder [postId] and when user enter something for post id..it get this..amazing

    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${post}`)
    const data = response.data

    

    return <>
    <div> My todo {post} </div>
    <div>{data.title}</div>
    <div>{data.completed ? "true" : "false"}</div>
    </>
}

