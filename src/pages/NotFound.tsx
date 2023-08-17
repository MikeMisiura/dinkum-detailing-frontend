import { Card } from "react-bootstrap";
import './NotFound.css';

function NotFound() {

    return (
        <>
            <Card className="cardNotFound">
            <h1 className="notFoundTitle">404 Not Found</h1>
            <h1 className="notFoundTitle" style={{fontSize: "25px", fontWeight: "300"}}>You are in the wrong place!</h1>
            </Card>
        </>
    )
}

export default NotFound;