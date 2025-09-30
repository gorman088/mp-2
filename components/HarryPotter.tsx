import styled from "styled-components";
import type {Wizard} from "../interfaces/Wizards.ts";

const AllWizardsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: dimgray;
`;

const SingleWizardDiv=styled.div<{house: string}>`
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    max-height: 80%;
    margin: 1%;
    padding: 2%;
   
    // Changing color based on Wizard's House
    background-color: ${(props)=> (props.house ===
    "Gryffindor" ? 'maroon' : props.house === "Hufflepuff" ? 'gold': props.house ===
    "Slytherin" ? 'darkgreen' : props.house === "Ravenclaw" ? 'darkblue' : 'black')};
    
    color: ${(props) => (props.house ? 'white' : 'white')};
    
    border: ${(props) => (props.house ===
    "Gryffindor" ? '3px solid gold' : props.house === "Hufflepuff" ? '3px solid black': props.house === 
    "Slytherin" ? '3px solid silver' : props.house === "Ravenclaw" ? '3px solid silver' : '3px solid white')};
    
    font: small-caps bold calc(2px + 1vw) "October Devanagari", fantasy;
    text-align: center;
    
    img {
       width: 100%;
        
        //Change color based on Wizard's House'
        border: ${(props) => (props.house ===
        "Gryffindor" ? '3px solid gold' : props.house === "Hufflepuff" ? '3px solid black': props.house ===
        "Slytherin" ? '3px solid silver' : props.house === "Ravenclaw" ? '3px solid silver' : '3px solid white')};
       
        height: 60%;
        margin-top: 2%;
    }
`;


export default function HarryPotter(props : { data:Wizard[] } ){
    return (
        <AllWizardsDiv >
            {
                props.data.map((wiz: Wizard) =>
                    <SingleWizardDiv key={wiz.id} house={(wiz.house)}>
                        <h1>{wiz.name}</h1>
                        <p>Species: {wiz.species}</p>
                        <p>Gender: {wiz.gender}</p>
                        <p>Ancestry: {wiz.ancestry || "unknown"}</p>
                        <p>Wizard: {String(wiz.wizard ? "yes" : "no")}</p>
                        <p>House: {wiz.house || "none"} </p>
                        <p>Alive: {String(wiz.alive ? "yes" : "no")}</p>
                        <img src={wiz.image || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"} alt={wiz.image ? `image of ${wiz.name}`: ""} />
                    </SingleWizardDiv>
                )
            }
        </AllWizardsDiv>
    );
}