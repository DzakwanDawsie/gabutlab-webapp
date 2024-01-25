'use client'

import { idLocaleDate, timeAgo } from '@/libs/Date'
import LikeForm from './LikeForm';
import { useState } from 'react';
import Toast from './Toast';

type Props = {
  post: Post;
  clickable: boolean;
}

function Post({ post, clickable = true }: Props) {
  const [copied, setCopied] = useState(false);

  const goToPost = () => {
    if (!clickable) return false;

    window.location.href = `/post/${post.id}`;
  }

  const preventGoToPost = (e: any) => {
    e.stopPropagation();

    return false;
  }

  const onClickShare = (e: any) => {
    const url = window.location.host + `/post/${post.id}`;
    navigator.clipboard.writeText(url);
    e.stopPropagation();

    return setCopied(true);
  }
  
  return (
    <>
      <article key={post.id} className="article">
        <div className="article-header">
          <div className="article-header-photo">
            <img src="https://rerollcdn.com/GENSHIN/Characters/Yelan.png" />
          </div>
          <div className="article-header-detail">
            <div className="article-header-detail-username">Admin</div>
            <div className="article-header-detail-datetime">{timeAgo(post.created_at)}</div>
          </div>
        </div>
        <div className="article-body" onClick={goToPost} style={{ cursor: (!clickable ? 'default' : 'pointer') }}>
          <span className="article-body-title">{post.title}</span>
          <span className="article-body-content" dangerouslySetInnerHTML={{ __html: post.content }}></span>
          <div className="article-body-picture">
            <img src={post.photo} />
          </div>
          <div className="article-body-tag">
            {post.topics.map(topic => {
              return (<a key={topic.id} href="#">#{topic.detail.name}</a>)
            })}
          </div>
          <div className="article-body-tools">
            <div className="like" onClick={preventGoToPost}>
              <LikeForm post={post}/>
              <span>{post.likes_count}</span>
            </div>
            <div className="share">
              <button onClick={onClickShare}>
                <img src="/img/share.svg"/>
              </button>
            </div>
          </div>
        </div>
      </article>
      {copied ? <Toast message='Link copied'/> : ''}
    </>
  )
}

export default Post