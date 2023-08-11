import HomeComponent from "../components/HomeComponent";
import ButtonFooter from "../components/ButtonFooter";
import './HomePage.css';

function Home() {

    return (
        <>
        <div className="buttonFooter">
        <ButtonFooter/>
        </div>
        <HomeComponent/>
        </>
    )
}

export default Home;