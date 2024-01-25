'use server'

import { login } from "@/libs/ApiRequest";
import * as Session from '@/libs/Session';

type State = {
  initial: boolean,
  success: boolean,
  message: string,
  data: any
}

export async function loginAction(prevState: State, formData: FormData): Promise<State> {
  const request = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const response = await login(request);

  if (response.success) Session.store(response.data.customer);

  return { initial: false, ...response };
}