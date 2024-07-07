"use client";
import React, { useState } from "react";
import SplineScene from "./SplineScene";

const OpenModalOnMouseDown = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedObjectName, setSelectedObjectName] = useState(null);

	function closeModal() {
		setModalOpen(false);
	}

	function onSplineMouseDown(e) {
		const object = e.target.obj || e.target;

		if (object) {
			console.log("Clicked object:", object);
			const objectName = object.name;
			setSelectedObjectName(objectName);
			setModalOpen(true);
		}
	}

	return (
		<main className="relative w-screen h-screen">
			<SplineScene onSplineMouseDown={onSplineMouseDown} />
			<Modal
				isOpen={modalOpen}
				onClose={closeModal}
				objectName={selectedObjectName}
			/>
		</main>
	);
};

const Modal = ({ isOpen, onClose, objectName }) => {
	if (!isOpen) return null;

	let modalContent = null;

	switch (objectName) {
		case "ClickThis":
			modalContent = (
				<div className="w-[80vw] h-[80vh] p-8 relative bg-black/75 border-gray-600 border rounded-lg shadow-lg">
					<h2 className="text-3xl font-mono text-white font-bold mb-4">Opened Modal</h2>
					<p className="text-white font-mono mb-4">Object Name: {objectName}</p>
					<p className="text-sm text-gray-400 font-mono">
						This is a modal that has appeared after you clicked the "ClickThis" object in Spline with a MouseDown event in the editor and using the onSplineMouseDown function.
						<br></br>
						<br></br>
						You can use this modal to provide additional information or actions related to the clicked object.
					</p>
					<button
						type="button"
						className="font-mono border border-gray-600 absolute bottom-4 right-4 hover:bg-gray-600 text-white py-2 px-4 rounded mt-4"
						onClick={onClose}
					>
						Close
					</button>
				</div>
			);
			break;
		default:
			modalContent = null;
	}

	return (
		<dialog
			open={isOpen}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
		>
			{modalContent}
		</dialog>
	);
};


export default OpenModalOnMouseDown;