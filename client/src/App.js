import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Demofirst } from "./catalogue/sites/Demofirst";
import { Demosecond } from "./catalogue/sites/Demosecond";
import { Demothird } from "./catalogue/sites/Demothird";
import ContactForm from "./components/ContactForm/ContactForm";
import WorkingState from "./contexts/workngalert/workingstate";
import Spinner from "./components/Spinner/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <>
      <WorkingState>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {loading ? (
                    <>
                      <Spinner loading={loading} msg="Welcome to " />
                    </>
                  ) : (
                    <div className="App">
                      <Navbar />
                      <Homepage />
                      <Footer />
                    </div>
                  )}
                </>
              }
            ></Route>
            <Route exact path="/contactus" element={<ContactForm />} />
            <Route exact path="/demo">
              <Route path="/demo/site1" element={<Demofirst />} />
              <Route path="/demo/site2" element={<Demosecond />} />
              <Route path="/demo/site3" element={<Demothird />} />
            </Route>
          </Routes>
          <ToastContainer theme="colored" />
        </BrowserRouter>
      </WorkingState>
    </>
  );
}

export default App;
