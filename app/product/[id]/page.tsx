import {Button} from '@/components/ui/button'
import {Title} from '@/components/shared/title'

export default function ProductPage() {
	return (
		<div className={'flex items-center justify-center flex-col h-[75vh]'}>
			<Title text={'Product page'} size={'2xl'} className='mb-5'/>
			<Button variant={'outline'}>click me</Button>
		</div>
	);
}