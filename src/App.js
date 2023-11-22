import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/contact",
      element: <ContactMe />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/testimonial",
      element: <Testimonial />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
