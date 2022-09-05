import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from "./views/App";
import {BoardProvider} from "./contexts/BoardContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <React.StrictMode>
            <BoardProvider>
                <App/>
            </BoardProvider>
        </React.StrictMode>
    );
