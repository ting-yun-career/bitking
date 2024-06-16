'use server';

export async function myFunc(data: any) {
  console.log('calling myFunc', data);
  return { result: 'okay', data }
}
