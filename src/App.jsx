import React from "react";
import { Route, Routes } from "react-router-dom";
import Header  from '@components/header/Header';
import Landing from '@pages/Landing.jsx'
import Footer from '@components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/"  element={<Landing />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
