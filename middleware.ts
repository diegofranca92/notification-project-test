import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get('next-auth.session-token')?.value ||
    req.cookies.get('__Secure-next-auth.session-token')?.value

  const isAuthPage = req.nextUrl.pathname.startsWith('/cadastro')

  if (!token && !isAuthPage) {
    const loginUrl = new URL('/cadastro', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Definir as rotas protegidas onde o middleware deve rodar
export const config = {
  matcher: [
    '/configuracao/:path*',
    '/setup/:path*',
    '/historico/:path*',
    '/envio-notificacoes/:path*'
  ]
}
