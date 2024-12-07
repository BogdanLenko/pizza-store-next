'use client'

import {FC, useEffect, useRef} from 'react'
import {cn} from '@/lib/utils'
import {ProductCard} from '@/components/shared/product-card'
import {Title} from '@/components/shared/title'
import {useIntersection} from 'react-use'
import {useCategoryStore} from '@/store/category'

interface Props {
	className?: string
	items: any[]
	title: string
	listClassName?: string
	categoryId: number
}

export const ProductsGroupList: FC<Props> = ({
	className,
	items,
	title,
	listClassName,
	categoryId,
}) => {
	const setActiveId = useCategoryStore((state) => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.1,
	})
	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])
	return (
		<div className={cn(className)} id={title} ref={intersectionRef}>
			<Title text={title} size={'md'} className={'font-bold mb-3'}/>
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{
					items.map((product, index) => (
						<ProductCard imageUrl={product.imageUrl} id={product.id} price={product.items[0].price} name={product.name} key={index}/>
					))
				}
			</div>
		</div>
	)
}