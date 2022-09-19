import React from "react";

class PkmnType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }
    }

    render() {
        return (
            <div className="type" id={this.state.name}> <p className="type_names">{this.state.name} </p></div>
        )
    }

}

export default PkmnType;