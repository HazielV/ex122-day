import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap'
import MyNav from './nav'

export default function Frutas() {
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      price: 19.99,
      image: '/frutas/fruta1.png',
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 29.99,
      image: '/frutas/fruta2.webp',
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 39.99,
      image: '/frutas/fruta3.webp',
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 49.99,
      image: '/frutas/fruta4.png',
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 59.99,
      image: '/frutas/fruta5.jpg',
    },
  ]
  return (
    <div>
      <MyNav />
      <Container className="mt-2 p-4">
        <h2 className="mb-4">Sector de Frutas</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card style={{ height: '35rem' }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: '100%', objectFit: 'contain' }}
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>

                  <CardText>{`Precio: ${product.price.toFixed(2)}`}</CardText>
                  <Button color="primary">Añadir al carrito</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
