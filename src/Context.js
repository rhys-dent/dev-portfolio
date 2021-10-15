import { createContext, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
	const [selectedProject, setSelectedProject] = useState();
	return (
		<Context.Provider value={{ selectedProject, setSelectedProject }}>
			{children}
		</Context.Provider>
	);
}
