import React, { useState } from 'react';
import axios from "axios";

export default function NewUser(props) {
    const [fields, setFields] = useState({
        username: '',
    });

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            username: fields.username,
        }
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res => {console.log(res.data)
            setFields({
                username: ''
            })
        })
        
        .catch (error => {
            console.log(error);
        });
        
        
    }
    return (
        <div>
          <h3>Create New User</h3>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                    required id="username"
                    className="form-control"
                    value={fields.username}
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
          </form>
        </div>
    )
}
