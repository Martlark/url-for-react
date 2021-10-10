import React from "react";
import UrlFor from "./lib/url-for-react";

export const routeAbout = new UrlFor('/about', About, "About", "Show version information");

export default function About(){
    return <h1>About</h1>
}