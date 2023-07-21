import { Badge, Card } from "react-bootstrap";

function Services() {

    return (
        <div style={{ display: "flex" }}>
            <Card style={{ width: "30rem", margin: "10px" }}>
                <Card.Img variant="top" src="/images/cars/car1.png" />
                <Card.Body>
                    <Card.Title>Card Title <Badge bg="secondary">New</Badge></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: "30rem", margin: "10px" }}>
                <Card.Img variant="top" src="/images/cars/car2.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: "30rem", margin: "10px" }}>
                <Card.Img variant="top" src="/images/cars/car3.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Services;