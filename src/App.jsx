import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Header from '@components/header/Header';
import Landing from '@pages/Landing.jsx'
import Footer from '@components/Footer/Footer'
import About from '@pages/About.jsx'
import PageNotFound from "@pages/PageNotFound.jsx";
import Dashboard from '@pages/Dashboard.jsx';
import Table from "@components/Table/Table.jsx";
import Overview from '@pages/Overview.jsx';

import Calendar from "@pages/Calendar.jsx";
import Rolodex from "@pages/Rolodex.jsx";
import Settings from "@pages/Settings.jsx";
import Profile from "@pages/Profile.jsx";
import Careplans from "@pages/Careplans.jsx";
import RolodexList from "@components/Rolodex/RolodexList.jsx";
import RolodexDetail from "@components/Rolodex/RolodexDetail.jsx";
import PetDetail from "@components/Rolodex/PetDetail.jsx";
import PeopleDetail from "@components/Rolodex/PeopleDetail.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/"  element={<Landing />}/>
          <Route path="about" element={<About />}/>
          <Route path="test" element={<Table />}/>
          <Route path='dashboard' element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="overview" element={<Overview />}/>
            <Route path="calendar" element={<Calendar />}/>
            <Route path="careplans" element={<Careplans/>}/>
            <Route path="rolodex" element={<Rolodex />}>
              <Route path="" element={<Navigate to='list' replace/>}/>
              <Route path="list" element={<RolodexList />}/>
              <Route path="people/:id" element={<PeopleDetail />}/>
              <Route path="pet/:id" element={<PetDetail />}/>
            </Route>
            <Route path="settings" element={<Settings />}/>
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
