import { Link } from "react-router-dom";
import { pageRoutes } from "../data/routes";

export default function () {
	return (
		<div>
			<nav>
				<Link to={pageRoutes.projects}>Projects</Link>

				<Link to={pageRoutes.about}>About</Link>
				<Link to={pageRoutes.contact}>Contact</Link>
			</nav>
		</div>
	);
}
