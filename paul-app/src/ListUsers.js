import React, { Component } from 'react';

export default class ListUsers extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <table className="table">
                <thead className="thead-inverse">
                <tr>
                    <th>Nom</th>
                    <th>Age</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.listUsers.map( item => (
                        <tr  key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.type}</td>
                        </tr>
                        ))
                    }
                
                </tbody>
            </table>
        );
    };
}