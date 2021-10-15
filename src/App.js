import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
import { pageRoutes } from "./data/routes";
import { useState } from "react";
import background from "./background";
import Provider from "./Context";
import ProjectDetails from "./project-details/ProjectDetails";
function App() {
	background();

	const [refresh, setRefresh] = useState(false);
	window.onresize = function () {
		const innerWidth = window.innerWidth;
		setTimeout(() => {
			if (innerWidth === window.innerWidth) {
				console.log("resize over");
				//	window.location.reload();
			}
		}, 50);
	};
	return (
		<div style={{ padding: "1vw" }}>
			{refresh ? "" : ""}
			<Provider>
				<Router>
					<Header />
					<Switch>
						<Route exact path={pageRoutes.projects} component={Projects} />
						<Route
							exact
							path={pageRoutes.projectDetails}
							component={ProjectDetails}
						></Route>
						<Route path={pageRoutes.about} component={About} />
						<Route path={pageRoutes.contact} component={Contact} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
