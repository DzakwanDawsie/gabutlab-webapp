'use server'

import Post from "@/components/Post";
import PostNotFound from "@/components/PostNotFound";
import { getPosts } from "@/libs/ApiRequest"
import { useSearchParams } from "next/navigation";

type Props = {
  params: {},
  searchParams: {
    [key in string]: string | string[]
  }
}

export default async function Home(props: Props) {
  const topic = props.searchParams.topic;
  const keyword = props.searchParams.keyword;
  
  const posts = await getPosts({ topic, keyword });

  return (
    <div id="content">
      <div id="content-body">
        {posts.map(post => {
          return <Post key={post.id} post={post} clickable={true}/>
        })}

        {
          !posts.length
          ? <PostNotFound/>
          : ''
        }
      </div>
    </div>
  )
}
