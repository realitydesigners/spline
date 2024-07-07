"use client";
import React, { useRef } from "react";
import SplineScene from "./SplineScene";

const OnLoadMoveCamera = () => {
	const splineRef = useRef(null);
	const cameraRef = useRef(null);

	const onLoad = (spline) => {
		splineRef.current = spline;
		const cameraObject = spline.findObjectByName("Camera");
		if (cameraObject) {
			cameraRef.current = cameraObject;
			cameraObject.position.y += 500;
		}
	};

	const moveObject = () => {
		if (cameraRef.current) {
			cameraRef.current.position.y += 100;
		}
	};

	return (
		<main className="w-screen relative justify-center flex h-screen">
			<SplineScene onLoad={onLoad} />
			<button
				type="button"
				className="bg-black font-mono border border-gray-600 absolute bottom-4 hover:bg-gray-600 text-white py-2 px-4 rounded mt-4"
				onClick={moveObject}
			>
				Move Camera
			</button>
		</main>
	);
};

export default OnLoadMoveCamera;
