import React from "react";
import Link from "next/link";


export default function RobotSuccess() {
    return (
        <>
        <h1>Success!! You&#39;ve just traversed through a nested route. Claim your reward here.  </h1>
        <Link href={"robot/planner.js"}>Click Here!</Link>
        </>
    );
    }
    