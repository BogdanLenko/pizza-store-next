import {FC, PropsWithChildren} from 'react'
import {cn} from '@/lib/utils'


interface Props extends PropsWithChildren {
	className?: string
}

export const Container: FC<Props> = ({className, children}) => {
	return(
		<div className={cn('max-w-7xl mx-auto', className)}>{children}</div>
	)
}