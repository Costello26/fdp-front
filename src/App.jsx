import React from "react";
import { Routes, Route } from 'react-router-dom';
import { CharterListPage } from './pages/chartersList';
import { SingleCharterPage } from './pages/singleCharter';
import { LoginPage } from './pages/login';
import { ToursListPage } from './pages/toursList/ToursListPage';
import { SingleTourPage } from './pages/singleTour/singleTourPage';
import { UploadMedia } from './pages/singleTour';
import { SellTicketPage } from './pages/sellTicket/sellTicket';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}/>
        <Route path="login/" element={<LoginPage/>}/>
        <Route path="charters/" element={<CharterListPage/>}/>
        <Route path="charters/new/" element={<SingleCharterPage/>}/>
        <Route path="tours/" element={<ToursListPage/>}/>
        <Route path="tours/new/" element={<SingleTourPage/>}/>
        <Route path="tours/new/upload-media" element={<UploadMedia/>}/>
        <Route path="tickets/sell" element={<SellTicketPage/>}/>
        <Route path="tickets" element={<UploadMedia/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
