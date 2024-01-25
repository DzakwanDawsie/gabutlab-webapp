'use server';

import { Config } from "@/configs/config";
import { cookies } from "next/headers";

export const store = (data: Customer) => {
  const json = JSON.stringify(data);
  const sessionID = Buffer.from(json).toString('base64');

  const maxAge = Config.COOKIE_LIMIT;
  const httpOnly = Config.COOKIE_HTTPONLY;
  const path = '/';
  
  cookies().set('sessionID', sessionID, { maxAge, httpOnly, path });
}

export const validate = () => {
  const has = cookies().has('sessionID');
  if (!has) return false;

  const sessionID = cookies().get('sessionID')?.value;
  if (!sessionID) return false;
  
  return cookies().has('sessionID');
}

export const release = () => {
  return cookies().delete('sessionID');
}

export const getData = () => {
  const sessionID = cookies().get('sessionID')?.value;

  if (!sessionID) return null;

  const json = Buffer.from(sessionID, 'base64').toString('utf8');
  const data: Customer = JSON.parse(json);

  return data;
}
