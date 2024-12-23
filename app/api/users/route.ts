import {NextRequest, NextResponse} from 'next/server'
import {prisma} from '@/prisma/prisma-client'

export async function GET() {
	const users = await prisma.user.findMany()
	return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
	const data = await req.json()
	return prisma.user.create({ data }).then(user =>
		NextResponse.json({ message: 'User created', user })
	)
}