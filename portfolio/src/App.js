import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import PortfolioPage from "./pages/portfolio/Portfolio.page";
import ProjectPage from "./pages/project/Project.page";
import ContactPage from "./pages/contact/Contact.page";
import ErrorPage from "./pages/error/Error.page";
import NavComponent from "./components/nav/Nav.component";

function App() {
    return (
        <BrowserRouter>
            <NavComponent/>
            <Routes>
                {/* Routes */}
                <Route path="/" element= { <HomePage/> } />
                <Route path="/portfolio" element= { <PortfolioPage/> } />
                <Route path="/contact-me" element= { <ContactPage/> } />
                <Route path="/project/:type/:id" element= { <ProjectPage/> } />

                {/* Error Page */}
                <Route path="*" element= { <ErrorPage/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
