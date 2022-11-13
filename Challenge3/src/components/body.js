import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function KitchenSinkExample() {
  let card = [
    {
      id: 1,
      tittle: "Ford Raptor",
      text: "Nueva Ford Raptor al mercado",
    },
    {
      id: 2,
      tittle: "Ford Raptor",
      text: "Nueva Ford Raptor al mercado",
    },
    {
      id: 3,
      tittle: "Ford Raptor",
      text: "Nueva Ford Raptor al mercado",
    },
    {
      id: 4,
      tittle: "Ford Raptor",
      text: "Nueva Ford Raptor al mercado",
    },
  ];

  return (
    <CardGroup>
      {card.map((Element) => (
        <Card key={Element.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2021/10/525408.jpg" />
          <Card.Body>
            <Card.Title> {Element.tittle} </Card.Title>
            <Card.Text>{Element.text}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
  
}
 
export default KitchenSinkExample;

