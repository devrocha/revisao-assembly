import { getPosts } from "./api/posts";

async function posts(){
    const posts = await getPosts()

    console.log(posts)
}

posts()