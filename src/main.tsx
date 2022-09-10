import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from "./views/App";
import {BoardProvider} from "./contexts/BoardContext";
import {LocalStorageProvider} from "./contexts/LocalStorageContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <React.StrictMode>
            <LocalStorageProvider>
                <BoardProvider>
                    <App/>
                </BoardProvider>
            </LocalStorageProvider>
        </React.StrictMode>
    );
