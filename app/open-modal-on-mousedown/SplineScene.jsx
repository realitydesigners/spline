import Spline from "@splinetool/react-spline";
import React from "react";

const SplineScene = ({ onSplineMouseDown, onLoad }) => {
	return (
		<main className="w-screen h-screen">
			<Spline
				scene="https://prod.spline.design/6hwMMDlWd9Ha-kIL/scene.splinecode"
				onSplineMouseDown={onSplineMouseDown}
			/>
		</main>
	);
};

export default SplineScene;
