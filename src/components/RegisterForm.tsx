'use client'

import { loginAction } from "@/actions/login";
import { RedirectType, redirect } from "next/navigation";
import { useFormState } from "react-dom";
import Toast from "./Toast";
import { registerAction } from "@/actions/register";

const initialState = {
  initial: true,
  success: false,
  message: '',
  data: null
}

function RegisterForm() {
  const [state, formAction] = useFormState(registerAction, initialState);

  if (state.success) redirect('/', RedirectType.replace);

  return (
    <>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <button type="submit">Register</button>
      </form>
      
      {
        (!state.initial && !state.success
        ? <Toast key={Math.random()} message={state.message}/>
        : '')
      }
    </>
  )
}

export default RegisterForm