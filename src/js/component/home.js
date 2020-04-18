import React from "react";

//include images into your bundle
import { List } from "./list";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Todo List Aplication with React and Fetch </h1>
			<List />
		</div>
	);
}
