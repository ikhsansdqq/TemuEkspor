import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.token;
    const url = req.nextUrl.clone();

    if (url.pathname.startsWith('/profile') && !token) {
        url.pathname = '/profile/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
