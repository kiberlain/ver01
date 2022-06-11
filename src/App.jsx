import "./index.css";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabaseClient";
import Auth from "./Auth";
import Account from "./Account";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <hr />
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
      <hr />
    </div>
  );
}
