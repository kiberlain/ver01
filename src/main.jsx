import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import { App } from "./App";
import { Home } from "./pages/Home";
import { Topics } from "./pages/Topics";
import { Users } from "./pages/Users";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFoundPage";
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="topics" element={<Topics />} />
          <Route path="users" element={<Users />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
