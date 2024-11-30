import {Container} from '@/components/shared/Container'
import {Title} from '@/components/shared/Title'

export default function Home() {
  return (
    <>
      <Container>
        <Title className='font-extrabold mt-3' text={'All pizzas'} size={'lg'}></Title>
      </Container>
    </>
  );
}
