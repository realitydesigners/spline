"use client";
import React, { useRef } from "react";
import SplineScene from "./SplineScene";

const OnLoadTextChange = () => {
	const splineRef = useRef(null);
	const ObjectRef = useRef(null);

	const onLoad = (spline) => {
		splineRef.current = spline;
		const Object = spline.findObjectByName("MoveThis");
		if (ObjectRef) {
			ObjectRef.current = Object;

		}
	};

	const moveObject = () => {
		if (ObjectRef.current) {
			ObjectRef.current.position.z += -100;
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
				Move Object
			</button>
		</main>
	);
};

export default OnLoadTextChange;
