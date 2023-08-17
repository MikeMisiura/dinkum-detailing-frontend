import { Button, Card } from 'react-bootstrap';
import MessageContext from '../contexts/MessageContext';
import EstimateContext from '../contexts/EstimateContext';
import "./Account.css"
import { Check2 } from 'react-bootstrap-icons';

function Account() {
    let userId = localStorage.getItem('userId');

    let messageCount = 0;
    let messageCheck = false;
    let estimateCount = 0;
    let estimateCheck = false;
    
    return (
        <>
            <MessageContext.Consumer>
                {
                    ({ message }) => {

                        return <div>
                            <h1 className="headingAccount">PREVIOUS MESSAGES</h1>
                            {message.map((m: any) => {
                                if (userId === String(m.userId)) {
                                    messageCount++;
                                    messageCheck = true;

                                    let date = m.createdAt
                                    let goodDate = date.replace("T", ', ');
                                    let betterDate = goodDate.replace(".000Z", ' ');
                                    return (
                                        <div>

                                            <Card className="cardAccount" key={m.messageId}>
                                                <h4>{m.message}</h4>
                                                <p>{betterDate.split(",")[0]}</p>
                                            </Card>
                                        </div>
                                    )
                                }
                            }).reverse()}
                            {messageCount === 0 && <Card className="cardAccountNoHover">
                                        <h1 className="bodyAccount">There's Nothing Here</h1>
                                        <h1 className="bodyAccount" style={{ fontSize: "20px" }}>Send us a Message to get started!</h1>
                                        <div style={{ textAlign: "center" }}>
                                            <Button className="myButton" href="/contact-us" style={{ backgroundColor: "#3888CB", borderColor: "#3888CB" }}>Contact Us</Button>
                                        </div>
                                    </Card>}
                        </div>
                    }
                }
            </MessageContext.Consumer>
            <EstimateContext.Consumer>
                {
                    ({ estimate }) => {

                        return <div>
                            <h1 className="headingAccount">PREVIOUS ESTIMATES</h1>
                            {estimate.map((e: any) => {
                                if (userId === String(e.userId)) {
                                    estimateCount++;
                                    estimateCheck = true;

                                    let date = e.createdAt
                                    let goodDate = date.replace("T", ', ');
                                    let betterDate = goodDate.replace(".000Z", ' ');
                                    return (
                                        <div>
                                            <Card className="cardAccount" key={e.estimateId}>
                                                <h5>Price: ${e.price}</h5>
                                                <h5>Number of Seats: {e.seats}</h5>
                                                {e.leather === true && <h5>Leather <Check2 color="green" size={25} /></h5>}
                                                {e.conditioner === true && <h5>Conditioned <Check2 color="green" size={25} /></h5>}
                                                {e.pets === true && <h5>Pets <Check2 color="green" size={25} /></h5>}
                                                {e.smoke === true && <h5>Smoke <Check2 color="green" size={25} /></h5>}
                                                <p>{betterDate.split(",")[0]}</p>
                                            </Card>
                                        </div>
                                    )
                                }
                            }).reverse()}
                            {estimateCount === 0 && <Card className="cardAccountNoHover">
                                        <h1 className="bodyAccount">There's Nothing Here</h1>
                                        <h1 className="bodyAccount" style={{ fontSize: "20px" }}>Create an Estimate to get started!</h1>
                                        <div style={{ textAlign: "center" }}>
                                            <Button className="myButton" href="/estimate" style={{ backgroundColor: "#3888CB", borderColor: "#3888CB" }}>Get an Estimate</Button>
                                        </div>
                                    </Card>}
                        </div>
                    }
                }
            </EstimateContext.Consumer>
        </>
    );
}

export default Account