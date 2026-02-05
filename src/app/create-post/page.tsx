'use server'

import CreatePostForm from "@/components/CreatePostForm";
import { getTopics } from "@/libs/ApiRequest"

export default async function CreatePostPage() {
  const topics = await getTopics();

  return (
    <div id="content">
      <div id="content-body">
        <div className="create-post-container">
          <h1 className="page-title">Create New Post</h1>
          <CreatePostForm topics={topics} />
        </div>
      </div>
    </div>
  )
}
