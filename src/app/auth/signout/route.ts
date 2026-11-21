import {createClient} from '@/lib/supabase/server';import {NextResponse} from 'next/server';
export async function POST(request:Request){const db=await createClient();await db.auth.signOut();return NextResponse.redirect(new URL('/admin/login',request.url))}
