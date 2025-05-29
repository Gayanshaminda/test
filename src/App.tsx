import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/page8";
import Page9 from "./pages/page9";
import Page10 from "./pages/page10";
import AppNavigation from "./components/AppNavigation";
import PageNavigation from "./components/PageNavigation";
import Menu from "./components/Menu";
import AutoPageTransition from "./components/AutoPageTransition";
import "./index.css";
import TranslateIconButton from "./components/Translateiconbutton";

const AppContent = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isSpecialPage = pathname === "/page8" || pathname === "/page9" || pathname === "/page10";
  const isBackgroundPage = pathname === "/b2";

  return (
    <>
      <AutoPageTransition enabled={true} transitionDelay={5000} />

      <Routes>
        <Route path="/" element={<Navigate to="/page1" />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/page9" element={<Page9 />} />
        <Route path="/page10" element={<Page10 />} />
      </Routes>

      {!isBackgroundPage && !isSpecialPage && (
        <>
          <AppNavigation />
          <PageNavigation />
          <TranslateIconButton onClick={() => console.log("Translate clicked")} />
          <div className="fixed top-4 right-4 z-[9999]">
            <Menu onClick={() => console.log("Menu clicked")} />
          </div>
        </>
      )}

      {isSpecialPage && (
        <>
          <TranslateIconButton onClick={() => console.log("Translate clicked")} />
          <div className="fixed top-4 right-4 z-[9999]">
            <Menu onClick={() => console.log("Menu clicked")} />
          </div>
          <AppNavigation />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
