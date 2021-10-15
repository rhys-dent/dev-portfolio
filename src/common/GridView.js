import { Children, useRef } from "react";
import GridItem from "./GridItem";

export default function ({ children, heading, width = "100%" }) {
	const ref = useRef();

	return (
		<div style={{ width: width, textAlign: "center" }}>
			<h2 style={{}}>{heading}</h2>
			<div
				ref={ref}
				style={{
					display: "grid",
					gap: "1vw",
					gridTemplateColumns: `repeat(auto-fit,minmax(200px,1fr))`,
				}}
			>
				{Children.map(children, (child) => child)}
			</div>
		</div>
	);
}
