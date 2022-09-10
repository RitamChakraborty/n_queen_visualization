import './App.css';
import Boards from "../components/boards/Boards";
import Solutions from "../components/solutions/Solutions";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

export default function App() {
    return (
        <div id="Home">
            <div className="container">
                <Nav/>
                <Solutions/>
                <Boards/>
            </div>
            <Footer/>
        </div>
    );
}