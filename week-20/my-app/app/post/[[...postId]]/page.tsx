export default async function Post({ params }:{
    params: Promise<{
        postId:string
    }>
}) {
    const post = (await params).postId
    return <>
        <div>post : {JSON.stringify(post)}</div>
    </>
}