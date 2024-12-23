import { hashSync } from 'bcrypt'
import { prisma } from './prisma-client'

const up = async () => {
	await prisma.user.createMany({
		data: [
			{
				name: 'adminTest',
				surname: 'userTestSurname',
				email: 'testuser@gmail.com',
				password: hashSync('password', 10),
				cartId: '82435b7b-7b7b-4b7b-8b7b-7b7b7b7b7b7b',
				role: 'ADMIN',
				verified: new Date(),
			},
			{
				name: 'userTest',
				surname: 'userTest',
				email: 'testuser20@gmail.com',
				password: hashSync('password', 10),
				cartId: '82435b9c-7b7b-4b7b-8b7b',
				role: 'USER',
				verified: new Date(),
			},
		],
	})
}

const down = async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
}

const main = async () => {
	try {
		await down()
		await up()
	} catch (error) {
		console.error(error)
	}
}

main()
	.then(async () => await prisma.$disconnect())
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
	})
	.finally(() => process.exit(0))
