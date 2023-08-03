import { Badge, Button, Card, Carousel, Container } from "react-bootstrap";
import './HomePage.css';

function Home() {

    return (
        <>
            <img
                alt="logo"
                src='/images/logos/logo.png'
                width="150"
                height="150"
                className="align-top"
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
            />
            <h1 style={{ textAlign: "center", fontFamily: 'Rubik', fontSize: "100px", textShadow: "2px 2px 4px #000000", marginBottom: "40px" }}>DINKUM DETAILING</h1>

            <div>
                <Carousel controls={false} interval={3000}>
                    <Carousel.Item>
                        <img
                            src="/images/cars/car4.png"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="/images/cars/car5.png"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="/images/cars/car6.png"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo e magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <br />


            <h1 style={{ color: "white", textAlign: "center", fontFamily: 'Rubik', textShadow: "2px 2px 4px #000000", fontSize: "75px", marginBottom: "0px", backgroundColor: "#3888CB" }}>
                TEXT
            </h1>

            <h1 style={{ color: "white", fontFamily: 'Rubik', fontSize: "25px", textAlign: "center" }}>
                Find us on Google!
                <br />
                Short Paragraph for who what when where how and why
            </h1>



            <br />

            <h1 style={{ color: "white", textAlign: "center", fontFamily: 'Rubik', textShadow: "2px 2px 4px #000000", fontSize: "75px", marginBottom: "0px" }}>
                Services
            </h1>

            <div style={{ display: "flex" }}>
                <Card style={{ width: "30rem", margin: "10px" }} className="cardHome">
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

            <br />

            <h1 style={{ color: "white", textAlign: "center", fontFamily: 'Rubik', textShadow: "2px 2px 4px #000000", fontSize: "75px", marginBottom: "0px" }}>
                Interested?
            </h1>

            <Button style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} className="card">Get an Estimate</Button>

            <br />

            <h1 style={{ color: "white", textAlign: "center", fontFamily: 'Rubik', textShadow: "2px 2px 4px #000000", fontSize: "75px", marginBottom: "0px", backgroundColor: "#3888CB" }}>
                Reviews
            </h1>
        </>
    )
}

export default Home;