'use client'

import {FC} from 'react'
import {cn} from '@/lib/utils'
import {useCategoryStore} from '@/store/category'
import Link from 'next/link'

interface Props {
	className?: string
}

const categories: { id: number, name: string }[] = [
  { id: 1, name: 'Pizzas' },
  { id: 2, name: 'Combo' },
  { id: 3, name: 'Snacks' },
  { id: 4, name: 'Cocktails' },
  { id: 5, name: 'Coffee' },
  { id: 6, name: 'Drinks' },
  { id: 7, name: 'Deserts' }
]

export const Categories: FC<Props> = ({className}) => {
	const activeSort = useCategoryStore((state) => state.activeId)
	return (
		<div className={cn(className, 'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl')}>
			{
				categories.map((item, index) => {
					return(
						<Link key={index} className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
							activeSort === item.id && 'bg-white shadow-gray-200 text-primary'
						)} href={`/#${item.name}`}>
							<button>{item.name}</button>
						</Link>
					)
				})
			}
		</div>
	)
}