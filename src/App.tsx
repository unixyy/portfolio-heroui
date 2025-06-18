import { Route, Routes } from "react-router-dom";

import ContactPage from "./pages/contact";

import IndexPage from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}

export default App;
