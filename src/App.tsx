import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Erreur from "./pages/Erreur";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Erreur />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
