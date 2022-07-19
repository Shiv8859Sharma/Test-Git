import React, { useState } from "react"
class Revelist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            createInp: []
        }
    }

    addInp = () => {
        this.setState(({
            createInp: [...this.state.createInp, ""]

        }
        ))
        console.log("sbnmdbc")
    }

    handleChange = (e, index) => {
        console.log("entered in onChange event");
        this.state.createInp[index] = e.target.value;
        console.log(this.state.createInp[index]);
    }

    render() {
        return (
            <>
                <h2 className="m-2">Input Field Create</h2>
                {this.state.createInp.map((ele, index) => {
                    return(
                    <div className="form-inline" key={index}>
                        <input className="m-1" type="text" name="name" onChange={(e) => this.handleChange(e, index)} />
                    </div>
                )})}
                <button className="m-2 btn btn-dark" onClick={this.addInp}>Add Input</button>
            </>
        )
    }
}
export default Revelist;