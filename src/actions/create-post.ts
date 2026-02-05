'use server'

import { createPost } from "@/libs/ApiRequest";
import * as Session from '@/libs/Session';

type State = {
  initial: boolean,
  success: boolean,
  message: string,
}

export async function createPostAction(prevState: State, formData: FormData): Promise<State> {
  const profile = Session.getData();

  if (!profile) return { initial: false, success: false, message: 'Session Expired' };

  // Add user_admin_id (using customer id as user id)
  formData.append('user_admin_id', profile.id.toString());

  // Convert topic_ids from comma-separated string to array
  const topicIdsString = formData.get('topic_ids') as string;
  if (topicIdsString) {
    formData.delete('topic_ids');
    const topicIds = topicIdsString.split(',').filter(id => id.trim());
    topicIds.forEach(id => {
      formData.append('topic_ids', id);
    });
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!title) return { initial: false, success: false, message: "Title is required" };
  if (!content) return { initial: false, success: false, message: "Content is required" };

  try {
    const response = await createPost(formData);
    return { initial: false, ...response };
  } catch (error: any) {
    return { initial: false, success: false, message: error.message || 'Failed to create post' };
  }
}
