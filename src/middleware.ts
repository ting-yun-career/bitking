import { NextResponse } from 'next/server';
export function middleware(request: any) {
  // Your middleware logic goes here
  return NextResponse.next();
}
