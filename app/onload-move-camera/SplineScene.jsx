import Spline from "@splinetool/react-spline";
import React from "react";

const SplineScene = ({ onLoad }) => {
    return (
        <main className="w-screen h-screen">
            <Spline
                scene="https://prod.spline.design/P8wr9wyO3UDHb3i8/scene.splinecode"
                onLoad={onLoad}
            />
        </main>
    );
};

export default SplineScene;
