import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Fashion from "./components/FashionPage/Fashion";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import img from "./offer.png";

function App() {
  const [telePopup, setTelePopup] = useState(false);

  useEffect(() => {
    // let visited = localStorage["alreadyVisited"];
    //     if(visited) {
    //         setTelePopup(false);
    //          //do not view Popup
    //     } else {
    //          //this is the first time
    //          localStorage["alreadyVisited"] = true;
    //          setTelePopup(true);
    //     }
    //
    setTimeout(() => {
      setTelePopup(true);
    }, 10000);
  }, []);

  const toggleShow = () => setTelePopup(!telePopup);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fashion" element={<Fashion />} />
        </Routes>
      </BrowserRouter>
      <Modal
        // {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={telePopup}
        onHide={toggleShow}
      >
        <Modal.Header
          style={{ backgroundColor: "#004AAD" }}
          closeButton
        ></Modal.Header>
        <Modal.Body style={{ padding: "0", backgroundColor: "#004AAD" }}>
          <a target={"_blank"} rel="noreferrer" href="https://t.me/shapind">
            <img
              alt="follow us on telegram"
              style={{ padding: "50px" }}
              src={img}
              width="100%"
            />
          </a>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
