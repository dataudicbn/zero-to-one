import React from "react";
import Navi from "./Navi";

import Banner from "./Ban";
export default function Header() {
    return (
        <div className="w-full ">
            <h1>
                <Navi />
            </h1>
            <div className="flex w-full">
                <div className="w-full">
                    <Banner />
                </div>
            </div>
        </div>
    );
}
