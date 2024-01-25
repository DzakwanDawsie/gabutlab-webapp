'use server'

import { login } from "@/libs/ApiRequest";
import * as Session from '@/libs/Session';

type State = {
  initial: boolean,
  success: boolean,
  message: string,
}

export async function logoutAction(prevState: State): Promise<State> {
  Session.release();

  return { initial: false, success: true, message: 'Success' };
}