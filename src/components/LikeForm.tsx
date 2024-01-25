'use client'
import { addLikeAction } from '@/actions/add-like';
import React from 'react'
import { useFormState } from 'react-dom';
import Toast from './Toast';

type Props = {
  post: Post,
  comment?: PostComment
}

const initialState = {
  initial: true,
  success: false,
  message: ''
}

function LikeForm({ post }: Props) {
  const [state, formAction] = useFormState(addLikeAction, initialState);

  if (state.success) {
    window.location.reload();
  }

  return (
    <>
      <form action={formAction}>
        <input type="hidden" name="post_id" value={post.id} />
        <button type="submit">
          <img src="/img/like.svg"/>
        </button>
      </form>
      {
        (!state.initial
        ? <Toast key={Math.random()} message={state.message}/>
        : '')
      }
    </>
  )
}

export default LikeForm