import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./components/pages/Profile";
import Hook from "./components/pages/Hook";
import Home from "./components/pages/Home";

export default function RouterElement() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hook" element={<Hook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
