import { Button } from "react-bootstrap";
import "./ButtonFooter.css"

function ButtonFooter() {

    return (
        <>

<Button style={{position:"absolute", right:"-40px", bottom:"-80px",backgroundColor: "#153977", borderColor: "#153977"}} size="lg" className="me-4 buttonShape" href="/estimate">
    Get a <strong>FREE</strong> Estimate Now
</Button>
</>
    )
}

export default ButtonFooter;