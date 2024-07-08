"use client";
import React, { useRef } from "react";
import SplineScene from "./SplineScene";

const OnLoadMoveCamera = () => {
    const splineRef = useRef(null);
    const gameObjectRef = useRef(null);

    const onLoad = (spline) => {
        splineRef.current = spline;
        const gameObject = spline.findObjectByName("GameObject");

        // GameObject is a group containing Camera + Sphere(GameControls)
        if (gameObject) {
            gameObjectRef.current = gameObject;
            gameObject.position.y += 200;
            gameObject.position.x += 100;
        }
    };

    return (
        <main className="w-screen relative justify-center flex h-screen">
            <SplineScene onLoad={onLoad} />

        </main>
    );
};

export default OnLoadMoveCamera;
