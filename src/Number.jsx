import React, {useEffect, useState} from "react";
import UrlFor from "../dist/url-for-react";

export const routeNumber = new UrlFor("/number/:num", Number, "Numbers", "Pick the number");

export default function Number(props) {
    const [num, setNum] = useState(null);

    useEffect(() => {
        setNum(routeNumber.matchId(props))
    }, [props]);

    return <h1>Number {num}</h1>
}