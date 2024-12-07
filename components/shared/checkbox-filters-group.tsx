'use client'

import {ChangeEvent, FC, useState} from 'react'
import {cn} from '@/lib/utils'
import {FilterCheckbox, FilterCheckboxProps} from '@/components/shared/filter-checkbox'
import {Input} from '@/components/ui/input'

type Item = FilterCheckboxProps

interface Props {
	className?: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
	title: string
}

export const CheckboxFilterGroup: FC<Props> = ({
	                                               className,
	                                               items,
	                                               defaultItems,
	                                               limit = 5,
	                                               searchInputPlaceholder = 'Search...',
	                                               onChange,
	                                               defaultValue,
	                                               title,
                                               }) => {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	
	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	
	const list = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit)
	return (
		<div className={cn(className)}>
			<p className='font-bold mb-3'>{title}</p>
			<div className='mb-5'>
				{showAll && <Input value={searchValue} onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"/>}
			</div>
			<div className='flex flex-col gap-4 max-h-40 pr-2 overflow-auto scrollbar'>
				{
					list.map((item, index) => (
						<FilterCheckbox
							text={item.text}
							value={item.value}
							key={index}
							endAdornment={item.endAdornment}
							checked={false}
							onCheckedChange={(ids) => console.log(ids)}
						/>
					))
				}
			</div>
			{items.length > limit && (
				<div className={showAll ? 'border-t-neutral-100 mt-1' : ''}>
					<button className='text-primary mt-3' onClick={() => setShowAll(!showAll)}>{showAll ? 'Hide' : 'Show more...'}</button>
				</div>
			)}
		</div>
	)
}