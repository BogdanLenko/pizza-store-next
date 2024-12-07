import {FC} from 'react'
import {Categories} from '@/components/shared/categories'
import {SortPopup} from '@/components/shared/sort-popup'
import {cn} from '@/lib/utils'
import {Container} from '@/components/shared/container'

interface Props {
	className?: string
}

export const TopBar: FC<Props> = ({className}) => {
	return (
		<div className={cn(className, 'sticky top-0 py-5 shadow-lg shadow-black/5 z-10')}>
			<Container className='flex items-center justify-between'>
				<Categories/>
				<SortPopup/>
			</Container>
		</div>
	)
}