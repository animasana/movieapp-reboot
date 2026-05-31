import { createBrowserRouter, RouterProvider } from "react-router";
import Home, { homeLoader } from "./routes/Home";
import Detail, { detailLoader } from "./routes/Detail";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
            loader: homeLoader as any,
        },
        {
            path: "movie/:id",
            element: <Detail />,
            loader: detailLoader as any,
        },
        {
            path: "hello",
            element: <h1>Hello!</h1>,
        },
    ],
    {
        basename: "/movieapp-reboot",
    },
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
