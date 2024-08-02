'use server';

export async function getUser() {
  const p = new Promise<string>(res => {
    setTimeout(() => res(new Date().getTime().toString()), 2000)
  });
  return await p;
}