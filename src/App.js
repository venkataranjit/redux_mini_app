import "./App.css";
import NavBar from "./components/NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Account = lazy(() => import("./components/Account"));
const Referral = lazy(() => import("./components/Referral"));

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Container>
          <Suspense fallback="Loading">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              <Route path="/referral" element={<Referral />} />
            </Routes>
          </Suspense>
        </Container>
      </HashRouter>
    </>
  );
}

export default App;
