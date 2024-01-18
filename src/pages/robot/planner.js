import React from "react";
import Link from "next/link";
import { Image } from "semantic-ui-react";

export default function Planner() {
    return (
        <>
        <h1> Print-A-Plan Day Schedule Page.  </h1>
        <h2>This is yours to download and print as you wish!</h2>
        <Image src='/plannerpage.jpg' size='huge' alt='daily schedule template'/>
        </>
    );
    }