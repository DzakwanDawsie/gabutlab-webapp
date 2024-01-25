'use server'

import { addComment, login } from "@/libs/ApiRequest";
import * as Session from '@/libs/Session';

type State = {
  initial: boolean,
  success: boolean,
  message: string,
}

export async function addCommentAction(prevState: State, formData: FormData): Promise<State> {
  const profile = Session.getData();

  if (!profile) return { initial: false, success: false, message: 'Session Expired' };

  const request = {
    customer_id: profile.id,
    post_id: parseInt(formData.get('post_id') as string),
    content: formData.get('content') as string,
    parent_id: parseInt(formData.get('parent_id') as string || '0'),
  }

  if (!request.content) return { initial: false, success: false, message: "Can't send empty comment~" }

  const response = await addComment(request);

  return { initial: false, ...response };
}