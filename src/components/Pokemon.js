import React from "react";

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name, 
            type1: props.type1,
            type2: props.type2,
            sprite: props.sprite,
        }
    }



    render() {
        return (
            <div className="pokemon">
                {this.state.sprite && <img src={this.state.sprite} alt={this.state.name} className= "img_poke"/>}
                <div className="pokeinfo">
                    {this.state.name && <div className="poke_name"> {this.state.name} </div>}
                    <div className="types">
                        Type(s):
                        {this.state.type1 && `${this.state.type1} `} 
                        {this.state.type2 && `${this.state.type2}`}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemon;