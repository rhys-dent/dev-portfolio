import { createContext, useContext, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { projectsDataUrl } from "../Constants";
import { Context } from "../Context";
const icons = {
	"Node.js": "nodejs.png",
	"React.js": "reactjs.png",
	"Express.js": "expressjs.png",
	"Amazon S3": "s3.png",
	"Amazon CloudFront": "cloudfront.png",
	"Amazon Certificate Manager": "acm.png",
	"Amazon RDS": "rds.png",
	"AWS Amplify": "amplify.png",
	Javascript: "javascript.png",
	Godot: "godot.png",
	MongoDB: "mongodb.png",
};
export default function ({ project }) {
	const { setSelectedProject } = useContext(Context);
	const history = useHistory();
	const projectTileRef = useRef();
	useEffect(() => {
		const width = getComputedStyle(projectTileRef.current).width;
		projectTileRef.current.style.height = width;
	});
	return (
		<div
			ref={projectTileRef}
			style={{
				width: "100%",

				border: "2px solid black",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				background: "rgba(0,0,0,.5)",
				border: "1px solid whitesmoke",
				backdropFilter: "blur(10px)",
				backgroundImage: `url(${project.src})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
			onClick={() => {
				setSelectedProject(project);
				console.log(project);
				history.push("/details");
			}}
		>
			<div
				style={{
					marginBottom: "1vw",
				}}
			>
				<div>
					<h4
						style={{
							width: "200px",
							color: "white",
							width: "100%",
							background: "rgba(0, 0, 0, 0.75)",
						}}
					>
						{project.title}
					</h4>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					gap: "1vw",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "flex-end",
					background: "rgba(0, 0, 0, 0.75)",
					marginTop: "auto",
				}}
			>
				{project.technologies.map((technology) => (
					<img src={icons[technology]} height="32px" alt={technology} />
				))}
			</div>
		</div>
	);
}
