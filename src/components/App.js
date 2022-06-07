import "../styles/App.scss";
//import { useEffect, useState } from "react";
//import callToApi from "../services/api";
//import ls from '../services/localstorage';

import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import BattlePage from "../modules/battle/BattlePage";
import LandingPage from "../modules/landing/LandingPage";
import SuperHeroPage from "../modules/super-hero/SuperHeroPage";
import SuperHeroesPage from "../modules/super-heroes/SuperHeroesPage";
import ContactPage from "../modules/contact/ContactPage";


function App() {
  return (
    // HTML ✨

    <div className="bg-page">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/battle">
            <BattlePage />
          </Route>

          <Route path="/super-heroes">
            <SuperHeroesPage/>
          </Route>

          <Route path="/email">
            <ContactPage />
          </Route>

          <Route path="/super-hero/:id">
            <SuperHeroPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
