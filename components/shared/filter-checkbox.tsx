import {FC, ReactNode} from 'react'
import {cn} from '@/lib/utils'
import {Checkbox} from '@/components/ui/checkbox'

export interface FilterCheckboxProps {
	className?: string
	text: string
	value: string
	endAdornment?: ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
}

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
	className,
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked
}) => {
	return (
		<div className={cn(className, 'flex items-center space-x-2')}>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='rounded-[8px] w-6 h-6'
				id={`checkbox-${String(value)}`}
			/>
			<label htmlFor={`checkbox-${String(value)}`} className='leading-none cursor-pointer flex-1'>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}