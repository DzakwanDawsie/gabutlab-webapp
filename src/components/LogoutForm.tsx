'use client'

import { logoutAction } from '@/actions/logout';
import { redirect } from 'next/navigation';
import { useFormState } from 'react-dom';

const initialState = {
  initial: false,
  success: false,
  message: ''
}

function LogoutForm() {
  const [state, formAction] = useFormState(logoutAction, initialState);

  if (state.success) redirect('/');
  
  return (
    <form action={formAction}>
      <button type="submit">Logout</button>
    </form>
  )
}

export default LogoutForm