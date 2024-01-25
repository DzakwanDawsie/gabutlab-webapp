'use server'

import { register } from "@/libs/ApiRequest";
import * as Session from '@/libs/Session';

type State = {
  initial: boolean,
  success: boolean,
  message: string,
  data: any
}

export async function registerAction(prevState: State, formData: FormData): Promise<State> {
  const request = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const response = await register(request);

  if (response.success) Session.store(response.data.customer);

  return { initial: false, ...response };
}