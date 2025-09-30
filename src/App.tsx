import HarryPotter from "../components/HarryPotter.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Wizard} from "../interfaces/Wizards.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px black solid;
`;

export default function App() {

    // useState Hook to store Data.
    const [data, setData] = useState<Wizard[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://potterhead-api.vercel.app/api/characters");
            const characters: Wizard[]  = await rawData.json();
            setData(characters);
        }

        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return (
        <ParentDiv>
            <HarryPotter data={data}/>
        </ParentDiv>
    )
}