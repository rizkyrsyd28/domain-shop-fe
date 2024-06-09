import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import MainPage from "./pages/MainPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                element: <AppLayout />,
                children: [
                    {
                        path: "",
                        element: <MainPage />,
                    },
                    {
                        path: "/checkout/:domain",
                        element: <CheckoutPage />,
                    },
                ],
            },
            // {
            //   element: <AppLayout />,
            //   children: [
            //     {
            //       path: "",
            //       element: <PostHome />,
            //     },
            //     {
            //       path: "posts/new/",
            //       element: <PostForm />,
            //     },
            //     {
            //       path: "posts/:postId",
            //       element: <PostPage />,
            //     },
            //     {
            //       path: "subscription",
            //       element: <SubscriptionPage />,
            //     },
            //     {
            //       path: "menfess",
            //       element: <MenfessPage />,
            //     },
            //     {
            //       path: "movies/",
            //       children: [
            //         {
            //           path: "",
            //           element: <MoviesPage />,
            //         },
            //         {
            //           path: "new/",
            //           element: <MovieAdd />,
            //         },
            //       ],
            //     },
            //   ],
            // },
            // {
            //   element: <AuthLayout />,
            //   children: [
            //     {
            //       path: "login",
            //       element: <Login />,
            //     },
            //     {
            //       path: "register",
            //       element: <Register />,
            //     },
            //   ],
            // },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
