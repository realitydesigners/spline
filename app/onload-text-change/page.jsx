"use client";
import React, { useRef } from "react";
import SplineScene from "./SplineScene";

const OnLoadTextChange = () => {
	const splineRef = useRef(null);

	const onLoad = (spline) => {
		splineRef.current = spline;
		const textObject = spline.findObjectByName("Text");
		if (textObject) {
			spline.setVariable("TextVariable", "Text being changed from code");
		}
	};

	return (
		<main className="w-screen relative h-screen">
			<SplineScene onLoad={onLoad} splineRef={splineRef} />
		</main>
	);
};

export default OnLoadTextChange;
