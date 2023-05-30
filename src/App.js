import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import PortfolioPage from "./pages/portfolio/Portfolio.page";
import ProjectPage from "./pages/project/Project.page";
import ContactPage from "./pages/contact/Contact.page";
import ResumePage from "./pages/resume/Resume.page";
import ErrorPage from "./pages/error/Error.page";

function App() {
	return (
		<Container classname="app">
			<BrowserRouter basename="/">
				<Routes>
					{/* Routes */}
					<Route path="/" element={<HomePage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/portfolio" exact element={<PortfolioPage />} />
                    <Route path="/resume" exact element={<ResumePage />} />
					<Route path="/contact-me" element={<ContactPage />} />
					<Route path="/project/:type/:id" element={<ProjectPage />}  />
					{/* Error Page */}
					<Route path="/*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
