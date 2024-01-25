import { idLocaleDate, timeAgo } from '@/libs/Date'
import React from 'react'
import CommentItem from './CommentItem'

type Props = {
  post: Post,
  comments?: PostComment[]
}

function CommentList({ post, comments }: Props) {
  if (comments) post.comments = comments;
  
  return (
    <div className='comment-list'>
      {post.comments.map(comment => {
        return <CommentItem key={comment.id} post={post} comment={comment}/>
      })}
    </div>
  )
}

export default CommentList