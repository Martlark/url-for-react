import React, {useEffect, useState} from "react";

export default function Word(props) {
    const [word, setWord] = useState(null);

    useEffect(() => {
        setWord(props?.match?.params.word)
    }, [props]);

    return <h1>Word {word}</h1>
}