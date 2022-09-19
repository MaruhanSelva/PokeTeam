import React, { useState } from 'react'
import axios from "axios"
import Pokemon from './Pokemon';
import * as Strong from "../constants/Strong"
import PkmnType from './PkmnType';
import "../styles/styles.css";


function Main() {
  const [pokes, setPokes] = useState( [] );
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [showWeakness, setShowWeakness] = useState(false);
  const [vuls, setVuls] = useState([]);
  const [name, setName] = useState("");

  
  const handleClick = async (name) => {
    if (pokes.length !== 6) {
      try {
        const pokemon = await axios.get(
         `https://pokeapi.co/api/v2/pokemon/${name}/`
        );

        // logic for number of types
        if (pokemon.data.types.length === 2) {
          const info = [pokes.length, pokemon.data.name, pokemon.data.types[0].type.name, 
                        pokemon.data.types[1].type.name, pokemon.data.sprites.front_default];
          setPokes((prevData) => [...prevData, info]);

        } else {
          const info = [pokes.length, pokemon.data.name, pokemon.data.types[0].type.name, "", pokemon.data.sprites.front_default];
          setPokes((prevData) => [...prevData, info]);
          
        }

        setError(null);
      } catch (err) {
        setError(err.message);
        setPokes(null);
      } finally {
        setLoading(false);
      }
    }
   };

   const removePokemon = () => {
    setPokes(current => 
      current.filter(obj => {
        return obj[0] !== (pokes.length - 1);
      }), 
    );
   }

   const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(name);
      handleClick(name);
   }

   const handleInput = (event) => {
      let lowercase = event.target.value.toLowerCase();
      setName(lowercase);
   }

   const getTeamVulnerabilties = () => {
      let strengths = [];
      for (let i = 0; i < pokes.length; i++) {
        let pokemon = pokes[i];
        let str = Strong.getDualStrengths(pokemon[2], pokemon[3]);
        strengths = strengths.concat(str);
      }
      
      let vulnerabilities = Strong.getVulnerabilities(strengths);
      return vulnerabilities;
   }

   const displayVulnerabilties = () => {
      setVuls(getTeamVulnerabilties());
      setShowWeakness(!showWeakness);  
   }


  return (
    <>

      <p className="instructions">Enter the Pokemon on your team to see which STAB type strengths you are missing!</p>    
      <p className="subtitle">Make sure you spell the Pokemon's name correctly!</p>
      {loading && <div>A moment please...</div>}
      {error && <div>There is a problem accessing the data</div>}

      <form onSubmit={handleFormSubmit} className="pokemon_adder">
        <label>
          Enter a Pokemon Name:
          <input type="text" onChange={handleInput}/>
        </label>
        <input type="submit"/>
      </form>

      
      <div className="team">
        {pokes.map( (p, index) => (
                <Pokemon 
                  key= {index}
                  name={p[1]}
                  type1={p[2]}
                  type2={p[3]}
                  sprite={p[4]}
                />
                ))}
      </div>

      <div className="buttons">
        {(pokes.length !== 0) && <button onClick={removePokemon}>Remove Pokemon</button>}
        <button onClick={displayVulnerabilties}>Get Vulnerabilities</button>
      </div>
      
      <div className="type_align">
        <div className="type_block">
          {showWeakness && vuls.map((p, index) => (
            <PkmnType key={index} name={p}/>
          ))}
        </div>
      </div>

    </>
  );
}

export default Main;
