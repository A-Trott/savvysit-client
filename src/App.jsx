import React from "react";
import { Route, Routes } from "react-router-dom";
import Header  from '@components/header/Header';
import Landing from '@pages/Landing.jsx'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/"  element={<Landing />}/>
        </Routes>
      </main>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
