'use server'

import { addComment, addLike, login } from "@/libs/ApiRequest";
import * as Session from '@/libs/Session';

type State = {
  initial: boolean,
  success: boolean,
  message: string,
}

export async function addLikeAction(prevState: State, formData: FormData): Promise<State> {
  const profile = Session.getData();

  if (!profile) return { initial: false, success: false, message: 'Session Expired' };

  const request = {
    customer_id: profile.id,
    post_id: parseInt(formData.get('post_id') as string),
  }

  const response = await addLike(request);

  return { initial: false, ...response };
}