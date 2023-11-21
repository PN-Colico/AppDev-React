import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RegisterationChoices from "./pages/RegisterationChoices";
import RegisterT from "./pages/RegisterT";
import RegisterS from "./pages/RegisterS";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/registert":
        title = "";
        metaDescription = "";
        break;
      case "/registers":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<RegisterationChoices />} />
      <Route path="/registert" element={<RegisterT />} />
      <Route path="/registers" element={<RegisterS />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
