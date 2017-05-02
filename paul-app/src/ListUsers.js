import React, { Component } from 'react';

export default class ListUsers extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    //suppression des utilisateurs
    deleteUser(e) {
        e.preventDefault();
        fetch('https://kickass-sdw-3a.herokuapp.com/api/user/' + e.target.value, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => (response) => {
            console.log(response); 
        }, console.log('delete user : ' + e.target.value));

       // this.props.componentDidMount();
    }

    //affichage des utilisateurs
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
                            <td><button onClick={this.deleteUser} value={item._id}/></td>
                        </tr>
                        ))
                    }
                
                </tbody>
            </table>
        );
    };
}