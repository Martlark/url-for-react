import React from "react";
import UrlFor from "./lib/url-for-react";
export const routeAbout = new UrlFor('/about', About);
export default function About(){
    return <h1>About</h1>
}