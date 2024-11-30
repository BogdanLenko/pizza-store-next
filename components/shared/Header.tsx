import {FC} from 'react'
import {cn} from '@/lib/utils'
import {Container} from '@/components/shared/Container'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import {ArrowRight, ShoppingCart, User} from 'lucide-react'


interface Props {
	className?: string
}

export const Header: FC<Props> = ({ className }) => {
	return(
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<div className='flex items-center gap-4'>
					<Image width='35' height='35' src='/logo.png' alt='Logo'></Image>
					<div>
						<h1 className={'text-3xl uppercase font-black'}>Next Pizza</h1>
						<p className={'text-sm text-gray-400 leading-3'}>The most delicious in the word</p>
					</div>
				</div>
				<div className='flex gap-4'>
					<Button variant={'outline'}>
						<User size={16} className='mr-1'/>
						sign in
					</Button>
					<div className='group relative'>
						<Button variant={'default'}>
							<b>520 $</b>
							<div className='w-[1px] bg-white h-full mx-3'></div>
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart size={17} className='mr-1' />
								<b>3</b>
							</div>
							<ArrowRight className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"/>
						</Button>
					</div>
					
				</div>
			</Container>
		</header>
	)
}