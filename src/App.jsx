import React from "react";
import { Routes, Route } from 'react-router-dom';
import { CharterListPage } from './pages/chartersList';
import { SingleCharterPage } from './pages/singleCharter';
import { LoginPage } from './pages/login';
import { ToursListPage } from './pages/toursList/ToursListPage';
import { SingleTourPage } from './pages/singleTour/singleTourPage';
import { UploadMedia } from './pages/singleTour';
import { SellTicketPage } from './pages/sellTicket/sellTicket';
import { TicketsListPage } from "./pages/ticketsList";
import { TourFilters, AviaFilters } from "./components/filters";
import { RootPage } from "./pages/root";
import { SubagentsListPage } from "./pages/subagentsList/subagentsList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootPage/>}/>
        <Route path="login/" element={<LoginPage/>}/>
        <Route path="charters/" element={<CharterListPage/>}/>
        <Route path="charters/new/" element={<SingleCharterPage/>}/>
        <Route path="tours/" element={<ToursListPage/>}/>
        <Route path="tours/new/" element={<SingleTourPage/>}/>
        <Route path="tours/new/upload-media" element={<UploadMedia/>}/>
        <Route path="tickets/sell" element={<SellTicketPage/>}/>
        <Route path="tickets/tour" element={<TicketsListPage type="tour" title="Проданные турпакеты" filters={<TourFilters/>}/>}/>
        <Route path="tickets/avia" element={<TicketsListPage type="avia" title="Проданные авиабилеты" filters={<AviaFilters/>}/>}/>
        <Route path="subagents/list" element={<SubagentsListPage/>} />
        <Route path="subagents/add" element={<SubagentsListPage/>} />
        <Route path="subagents/users" element={<SubagentsListPage/>} />
        <Route path="subagents/users/add" element={<SubagentsListPage/>} />
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
