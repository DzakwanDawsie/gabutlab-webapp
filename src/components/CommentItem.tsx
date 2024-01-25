'use client'

import { idLocaleDate, timeAgo } from '@/libs/Date'
import React, { useState } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

type Props = {
  post: Post
  comment: PostComment
}

function CommentItem({ post, comment }: Props) {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const onClickReply = () => {
    setShowCommentForm(!showCommentForm);
  }
  return (
    <div key={comment.id} className="comment-item">
      <div className="comment-item-header">
        <div className="comment-item-header-photo">
          <img src={`https://ui-avatars.com/api/?name=${comment.customer.name}`} />
        </div>
        <div className="comment-item-header-detail">
          <div className="comment-item-header-detail-username">{comment.customer.name}</div>
          <div className="comment-item-header-detail-datetime">{timeAgo(comment.created_at)}</div>
        </div>
      </div>

      <div className="comment-item-body">
        <span className="comment-item-body-content">{comment.content}</span>
        <div className='comment-item-footer'>
          <span className="comment-item-footer-date">{idLocaleDate(comment.created_at, 'medium')}</span>
          <span className="comment-item-footer-reply" onClick={onClickReply}>Reply</span>
        </div>

        {
          showCommentForm ? <CommentForm post={post} comment={comment}/> : ''
        }

        {comment.comments ? <CommentList post={post} comments={comment.comments}/> : '' }
      </div>
    </div>
  )
}

export default CommentItem