import {Container} from '@/components/shared/container'
import {Title} from '@/components/shared/title'
import {TopBar} from '@/components/shared/top-bar'
import {Filters} from '@/components/shared/filters'
import {ProductsGroupList} from '@/components/shared/products-group-list'

export default function Home() {
  return (
    <>
      <Container>
        <Title className='font-extrabold mt-3' text={'All pizzas'} size={'lg'}></Title>
      </Container>
      <TopBar/>
      <Container className='pb-14 mt-10'>
        <div className='flex gap-16'>
          <div className='w-64'>
            {/*<Filters className={'sticky overflow-y-auto top-28 h-[580px]'}/>*/}
            <Filters className={'sticky top-28'}/>
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList items={[
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 1,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 2,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 3,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 4,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 5,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 6,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 7,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 8,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 9,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 10,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                }
              ]} title={'Pizzas'} categoryId={1}/>
              <ProductsGroupList items={[
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 1,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 2,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 3,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 4,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 5,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 6,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 7,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 8,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 9,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                },
                {
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF0286069492BA911C4D3B3376436C.avif',
                  id: 10,
                  name: 'Pizza Cheesburger',
                  items: [
                    {
                      price: 300
                    },
                    {
                      price: 400
                    },
                    {
                      price: 550
                    }],
                }
              ]} title={'Combo'} categoryId={2}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
