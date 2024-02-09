import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Todos from "../components/Todos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/todos",
        element: <Todos />
    }
])

export default router;