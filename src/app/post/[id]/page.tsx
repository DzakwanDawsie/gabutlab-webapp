import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList';
import Post from '@/components/Post';
import { getPostById } from '@/libs/ApiRequest'
import React from 'react'

async function page({
  params: { id }
}: {
  params: { id: number }
}) {
  const post = await getPostById(id);

  if (!post) return '';

  return (
    <div id="content">
      <div id="content-body">
        <div className="content-header">
          <span>Post Detail Page</span>
        </div>

        {!post ? '' : <Post post={post} clickable={false}/>}
        
        <div className="comment">
          <div>
          </div>
          <CommentForm post={post}/>

          <CommentList post={post}/>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default page