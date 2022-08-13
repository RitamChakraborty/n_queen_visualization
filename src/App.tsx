import NQueenService from "./service/n-queen-service";

export default function App() {
    function handle() {
        const nQueenService = new NQueenService(8);
        const positions = nQueenService.getPositions()
        console.log(positions);
    }

    return <>
        <h1>N Queen Visualization</h1>
        <button onClick={handle}>
            Solve
        </button>
    </>
}