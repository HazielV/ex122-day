import { Col, Container, Row } from 'reactstrap'
import MyNav from './components/nav'
import { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

function App() {
  const items = [
    {
      src: '/carnes/carne4.webp',
      altText: 'Producto 1',
      caption: 'Producto 1',
      key: 1,
    },
    {
      src: '/frutas/fruta5.jpg',
      altText: 'Producto 2',
      caption: 'Producto 2',
      key: 2,
    },
    {
      src: '/panaderia/pan3.png',
      altText: 'Producto 3',
      caption: 'Producto 3',
      key: 3,
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex: number) => {
    if (animating) return
    setActiveIndex(newIndex)
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="overflow-hidden text-black"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{
          maxWidth: '60rem', // Ajusta el ancho máximo
          margin: '0 auto',
          height: '400px', // Define una altura fija para el carrusel
          overflow: 'hidden',
        }}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{
            width: '100%', // Ajusta al ancho del contenedor
            height: 'auto',
            maxHeight: '35rem', // Mantén la proporción
            objectFit: 'cover', // O ajusta según tus necesidades
            objectPosition: 'start',
          }}
        />
        <CarouselCaption
          style={{
            color: 'black', // Cambia el color del texto a negro
          }}
          className="text-black"
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })
  return (
    <div>
      <MyNav />
      <Container className="mt-4 text-dark">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Bienvenido a la tienda Patito</h2>
            <div style={{ background: '#E8E8E9' }}>
              <Carousel
                style={{ maxWidth: '60rem', margin: '0 auto', color: 'F8F9FA' }}
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  className="bg-secondary-subtle"
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                  style={{ color: 'black' }}
                />
                {slides}
                <CarouselControl
                  className="bg-secondary-subtle"
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                  style={{ color: 'black' }}
                />
                <CarouselControl
                  className="bg-secondary-subtle"
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                  style={{ color: 'black', backgroundColor: '#040302' }}
                />
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
