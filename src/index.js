import react from "react";
import {createRoot} from 'react-dom/client'
import { ReactDOM } from "react";
import App from "./App";



/*ReactDOM.render(<App/>,document.getElementById("root"));*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);



