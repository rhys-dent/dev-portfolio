import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../Context";

export default function () {
	const { selectedProject, setSelectedProject } = useContext(Context);

	return selectedProject ? (
		<div
			style={{
				top: "0",
				left: "0",

				width: "100%",
				padding: "4vh",
			}}
		>
			<div
				style={{
					height: "100%",

					color: "white",
					padding: "2vw",
					boxShadow: "0 0 2px white",
				}}
			>
				<div
					style={{
						paddingBottom: "2vw",
						display: "flex",
						gap: "1vw",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div>
						<a
							style={{
								border: "2px solid white",
								textDecoration: "none",
								color: "white",
								padding: ".5rem",
								borderRadius: "1rem",
								marginRight: "1rem",
							}}
							href={selectedProject.url}
						>
							Visit Site
						</a>
						{selectedProject.code ? (
							<a
								style={{
									border: "2px solid white",
									textDecoration: "none",
									color: "white",
									padding: ".5rem",
									borderRadius: "1rem",
									marginRight: "1rem",
								}}
								href={selectedProject.code}
							>
								View Code
							</a>
						) : (
							""
						)}
					</div>
					<img
						src="cancel.png"
						width="24px"
						height="24px"
						onClick={() => setSelectedProject(false)}
						style={{ background: "white", borderRadius: "50%" }}
					/>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit,min(500px,100%))",
						width: "100%",
						gap: "1vw",
						background: "rgba(0,0,0,.5)",
						background: "red",
						backdropFilter: "blur(10px)",
					}}
				>
					<div>
						<h3 style={{ marginBottom: "1vw" }}>{selectedProject.title}</h3>
						<p style={{ marginBottom: "1vw" }}>{selectedProject.description}</p>
						<h4 style={{ marginBottom: "1vw" }}>Created using:</h4>
						<ul>
							{selectedProject.technologies.map((tech) => (
								<li>{tech}</li>
							))}
						</ul>
					</div>
					<img
						src={selectedProject.src}
						alt=""
						style={{
							width: "100%",
							marginLeft: "auto",
							background: "red",
						}}
					/>
				</div>
			</div>
		</div>
	) : (
		<Redirect />
	);
}
