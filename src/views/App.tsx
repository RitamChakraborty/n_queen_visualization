import './App.css';
import Boards from "../components/boards/Boards";
import Solutions from "../components/solutions/Solutions";
import Nav from "../components/nav/Nav";

export default function App() {
    return (
        <div id="Home">
            <div className="container">
                <Nav/>
                <Solutions/>
                <Boards/>
            </div>
        </div>
    );
}