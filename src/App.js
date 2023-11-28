
import {React} from 'react';
import {
  createBrowserRouter,
  RouterProvider,BrowserRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from "./pages/Home/Home"
import AboutUs from "./pages/About-us/About-us"
import News from "./pages/News/News"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Subscribe from "./pages/Subscribe/Subscribe"
import Post from "./pages/Post/Post"
import NoMatch from './Components/Nomatch/Nomatch';
import NewsTemplate from './pages/News/NewsTemplate/NewsTemplate'


function App() {

  const router = createBrowserRouter([
      {
      path : "/",
      element : <Home />,
      loader: async () => { return null; },
      },
      {
        path :"/aboutus",
        element : <AboutUs />,
        loader: async () => { return null; },
      },
      { 
        path :"/news",
        element : <News />,
        loader: async () => { return null; },
      },
      {
        path:"/news/:id",
        element : < NewsTemplate />,
        loader: async () => { return null; },
      },
      {
        path :"/subscribe",
        element : <Subscribe />,
        loader: async () => { return null; },
      },
      {
        path :"/post",
        element: <Post />,
        loader: async () => { return null; },
      },
      {
      path: "*",
      element : <NoMatch/>
      },
    
  ])
  return (
    
    <> 
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>

  );
}

export default App;
