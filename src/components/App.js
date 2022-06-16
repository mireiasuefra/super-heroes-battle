import "../styles/App.scss";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import callToApi from "./../services/api-list";
import { addSuperHeroes } from "./../store/actions/super-heroes";

import Header from "./Header";
import Footer from "./Footer";
import BattlePage from "../modules/battle/BattlePage";
import LandingPage from "../modules/landing/LandingPage";
import SuperHeroPage from "../modules/super-hero/SuperHeroPage";
import SuperHeroesPage from "../modules/super-heroes/SuperHeroesPage";
import ContactPage from "../modules/contact/ContactPage";


function App() {
  const dispatch = useDispatch()
  
  // Llamada a la API:
  useEffect(() => {
    callToApi().then((response) => {
      dispatch(addSuperHeroes(response));
    });
  }, [dispatch]);

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
