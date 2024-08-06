import React from "react";
// import {
//   Route,
//   Router,
//   Switch,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import "./App.css";
import About from "./Containers/about";
import Blog from "./Containers/blog";
import ErrorPage from "./Containers/errorPage";
import ImageGallery from "./Containers/imageGallery";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route
              // exact
              path="/"
              element={<ImageGallery />}
              errorElement={ErrorPage}
            />
            {/* <Route path="/about" element={<About />} errorElement={ErrorPage} />
            <Route path="/blog" element={<Blog />} errorElement={ErrorPage} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
