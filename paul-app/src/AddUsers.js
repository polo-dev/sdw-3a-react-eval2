import React, { Component } from 'react';

export default class AddUsers extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <form className="form-inline">
                <label className="sr-only" for="name">Nom</label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="name" placeholder="Jane Doe"/>

                <label className="sr-only" for="age">Age</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon">#</div>
                    <input type="text" className="form-control" id="age" placeholder="age, exemple : 33"/>
                </div>
                
                 <label className="sr-only" for="type">Type</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <input type="text" className="form-control" id="type" placeholder="Alien"/>
                </div>

                <button type="submit" className="bt®n btn-primary">Submit</button>
            </form>
        );
    };
}