import {FC} from 'react'
import {cn} from '@/lib/utils'
import {Title} from '@/components/shared/title'
import {FilterCheckbox} from '@/components/shared/filter-checkbox'
import {Input} from '@/components/ui/input'
import {RangeSlider} from '@/components/shared/range-slider'
import {CheckboxFilterGroup} from '@/components/shared/checkbox-filters-group'
import styles from '../sass/filters.module.sass'

interface Props {
	className?: string
}

export const Filters: FC<Props> = ({className}) => {
	return (
		<div className={cn(className, styles.customScroll)}>
			<Title text={'Filter'} size={'sm'} className='mb-5 font-extrabold'/>
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Possible to build' value='1'/>
				<FilterCheckbox text={'New'} value={'2'}/>
				<div className='border-y mt-5 border-y-neutral-100 py-6 pb-7'>
					<p className='mb-2'>Price <b>from</b> and <b>till:</b></p>
					<div className='flex gap-3 mb-4 flex-col'>
						<div className='flex gap-3 mb-4'>
							<Input type={'number'} placeholder='0' min={0} max={1000} defaultValue={0}/>
							<Input type={'number'} placeholder='3000' min={100} max={3000} defaultValue={1000}/>
						</div>
						<RangeSlider min={0} max={3000} step={10}/>
					</div>
					<CheckboxFilterGroup items={
						[
							{
								text: 'Cheese',
								value: '1'
							},
							{
								text: 'Mozzarella',
								value: '2'
							},
							{
								text: 'Garlic',
								value: '3'
							},
							{
								text: 'Pickles',
								value: '4'
							},
							{
								text: 'Red onion',
								value: '5'
							},
							{
								text: 'Tomatoes',
								value: '6'
							},
							{
								text: 'Cheese',
								value: '1'
							},
							{
								text: 'Mozzarella',
								value: '2'
							},
							{
								text: 'Garlic',
								value: '3'
							},
							{
								text: 'Pickles',
								value: '4'
							},
							{
								text: 'Red onion',
								value: '5'
							},
							{
								text: 'Tomatoes',
								value: '6'
							},
							{
								text: 'Cheese',
								value: '1'
							},
							{
								text: 'Mozzarella',
								value: '2'
							},
							{
								text: 'Garlic',
								value: '3'
							},
							{
								text: 'Pickles',
								value: '4'
							},
							{
								text: 'Red onion',
								value: '5'
							},
							{
								text: 'Tomatoes',
								value: '6'
							},
						]
					} title={'Ingredients'} limit={4} defaultItems={
						[
							{
								text: 'Cheese',
								value: '1'
							},
							{
								text: 'Mozzarella',
								value: '2'
							},
							{
								text: 'Garlic',
								value: '3'
							},
							{
								text: 'Pickles',
								value: '4'
							},
							{
								text: 'Red onion',
								value: '5'
							},
							{
								text: 'Tomatoes',
								value: '6'
							},
						]
					}/>
				</div>
			</div>
		</div>
	)
}