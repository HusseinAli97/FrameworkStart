import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Error from './components/Error';



function handleTitle(title) {
  return (
    <h1 className="display-5 fw-bold titleComponent">
      {title}
      <div className="star d-flex justify-content-center w-100 align-items-center mt-3 w-50">
        <div className="Bar" id='left'></div>
        <i className="fa-solid fa-star "></i>
        <div className="Bar"></div>
      </div>
    </h1>
  );
}

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home creatTitle={handleTitle}  />
      },
      {
        path: "about",
        element: <About  creatTitle={handleTitle} />
      },
      {
        path: "portfolio",
        element: <Portfolio creatTitle={handleTitle} />
      },
      {
        path: "contact",
        element: <Contact  creatTitle={handleTitle} />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />

}

export default App;
