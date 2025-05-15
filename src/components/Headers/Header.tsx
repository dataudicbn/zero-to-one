import React from "react";
import Navi from "./Navi";

import Banner from "./Ban";
export default function Header() {
    return (
        <div>
            <h1>
                <Navi />
            </h1>
            <h1>
                <Banner />
            </h1>
        </div>
    );
}
