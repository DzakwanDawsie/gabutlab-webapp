'use client'

import { addCommentAction } from "@/actions/add-comment"
import { useFormState } from "react-dom"
import Toast from "./Toast"
import LoginDialog from "./LoginDialog"
import { redirect } from "next/navigation"

type Props = {
  post: Post,
  comment?: PostComment
}

const initialState = {
  initial: true,
  success: false,
  message: ''
}

function CommentForm({ post, comment }: Props) {
  const [state, formAction] = useFormState(addCommentAction, initialState);

  if (!state.initial && state.success) {
    window.location.reload()
  }

  return (
    <>
      <form action={formAction}>
        {comment ? <input type="hidden" name="parent_id" value={comment.id} /> : ''}
        <input type="hidden" name="post_id" value={post.id} />
        <textarea name="content" cols={30} rows={10} placeholder="Post your comment now~"></textarea>
        <button type="submit">Send</button>
      </form>

      {
        (!state.initial
        ? <Toast key={Math.random()} message={state.message}/>
        : '')
      }

      {
        (!state.initial && !state.success && state.message == 'Session Expired'
        ? <LoginDialog/>
        : '')
      }
    </>
  )
}

export default CommentForm