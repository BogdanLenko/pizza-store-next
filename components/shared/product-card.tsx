import {FC} from 'react'
import {cn} from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import {Title} from '@/components/shared/title'
import {Button} from '@/components/ui/button'
import {Plus} from 'lucide-react'

export interface ProductCardProps {
	className?: string
	imageUrl: string
	id: number
	price: number
	name: string
}

export const ProductCard: FC<ProductCardProps> = ({className, imageUrl, name, id, price}) => {
	return (
		<div className={cn(className)}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 bg-secondary rounded-lg'>
					<Image src={imageUrl} alt={name} height={215} width={215}/>
				</div>
				<Title text={name} size={'sm'} className='mb-1 mt-3 font-bold'/>
				<p>
					mozzarella, tomatoes, pickles, sauce
				</p>
			</Link>
			<div className="flex justify-between items-center mt-4">
				<b className={'text-xl'}>from {price}$</b>
				<Button variant={'outline'}>
					<Plus size={20} className='mr-1'/>
					Add to basket
				</Button>
			</div>
		</div>
	)
}