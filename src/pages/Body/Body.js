import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appRoutes } from "../../routes/routes";

const Body = () => {
    const router = createBrowserRouter(appRoutes);

    return (
        <RouterProvider router={router} />
    )
}

export default Body;