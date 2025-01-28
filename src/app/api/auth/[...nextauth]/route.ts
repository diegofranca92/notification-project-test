import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { login, password } = await req.json();

  if (login === 'test@example.com' && password === 'password') {
    return NextResponse.json({
      token: 'fake-jwt-token',
      user: {
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
      },
    });
  }

  return NextResponse.json({ error: 'Usuário não autenticado' }, { status: 401 });
}
