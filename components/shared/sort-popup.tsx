import {FC} from 'react'
import {cn} from '@/lib/utils'
import {ArrowUpDown} from 'lucide-react'

interface Props {
	className?: string
}

export const SortPopup: FC<Props> = ({className}) => {
	return (
		<div className={cn(className, 'inline-flex items-center gap-1 bg-gray-50 px-5 h-12 rounded-2xl cursor-pointer')}>
			<ArrowUpDown size={16} />
			<b>Sorted by:</b>
			<b className='text-primary'>popular</b>
		</div>
	)
}