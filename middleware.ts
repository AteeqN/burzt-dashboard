import { NextResponse, NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  // const request = new NextResponse();

    const cookie = request.cookies.get('token')?.value
    // console.log(cookie);
    if(!cookie){
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  // return NextResponse.rewrite(new URL("/about", req.nextUrl));
  // if (req.nextUrl.pathname.startsWith("/about")) {
  //   return NextResponse.rewrite(new URL("/about-2", req.nextUrl));
  // }
  
}

export const config = {
  matcher: ["/profile/:path*","/about/:path*"],
};
