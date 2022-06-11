import "./index.css";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabaseClient";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

import Auth from "./Auth";
import Account from "./Account";

const App = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Header session={session}></Header>
      <main className="Main">
        <div className="Сontainer">
          <h1>Outlet</h1>
          <Outlet />
          <hr />
          {!session ? (
            <Auth />
          ) : (
            <Account key={session.user.id} session={session} />
          )}
          <hr />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export { App };
