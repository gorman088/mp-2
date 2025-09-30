import styled from "styled-components";
import type {Character} from "../interfaces/Characters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: gray;
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.status === "Alive" ? 'lightgreen' : props.status === "Dead" ? 'darkred' : 'gold')};
    color: ${(props) => (props.status === "Alive" ? 'black' : props.status === "unknown" ? 'black' : 'white')};
    border: 3px black solid;
    font: small-caps bold calc(2px + 1vw) "October Tamil", fantasy;
    text-align: center;
    
    img {
        border: 3px solid black;
    }
`;

export default function RickAndMorty(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.status}>
                        <h1>{char.name}</h1>
                        <p>{char.species !== "Human" ? "Not Human" : "Human"}</p>
                        <p>Status: {char.status}</p>
                        <p>Gender: {char.gender}</p>
                        <p>Origin: {char.origin.name}</p>
                        <p>Location: {char.location.name}</p>
                        <p> Total Episodes: {char.episode.length}</p>
                        <img src={char.image} alt={`image of ${char.name}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}