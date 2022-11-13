import Nav from 'react-bootstrap/Nav';

function ListExample() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="">H1 H2 H3</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Resumen de Producto</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ListExample;