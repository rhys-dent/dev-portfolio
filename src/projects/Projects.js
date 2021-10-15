import PageTitle from "../common/PageTitle";
import GridView from "../common/GridView";
import ProjectTile from "./ProjectTile";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { Context } from "../Context";
import "./style.css";

export default function () {
	const [projects, setProjects] = useState([]);

	const { setSelectedProject, selectedProject } = useContext(Context);

	useEffect(() => {
		axios.get("project-data.json").then((res) => {
			const { data } = res;
			if (Array.isArray(data)) setProjects(data);
			else console.log("project data missing.");
		});
	}, []);
	return (
		<div>
			<PageTitle text="Projects" />
			<GridView>
				{projects.map((project) => (
					<ProjectTile project={project}>{project.title}</ProjectTile>
				))}

				{/* <GridView>
					<GridView heading="Tutorials">
						{projects.tutorials.map((tutorial) => (
							<Project>{tutorial.title}</Project>
						))}
					</GridView>
					<GridView heading="Other">
						{projects.other.map((other) => (
							<Project>{other.title}</Project>
						))}
					</GridView>
				</GridView> */}
			</GridView>
		</div>
	);
}
