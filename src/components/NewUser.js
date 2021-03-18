import React, { useState } from 'react';
import axios from "axios";

export default function NewUser() {
    const [fields, setFields] = useState({
        username: '',
    });
    const [message, setMessage] = useState(false);

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const user = {
            username: fields.username,
        }
        console.log(user);

        await axios.post('http://localhost:5000/users/add', user)
        .then(res => {console.log(res.data)
            setFields({
                username: ''
            })
        })
       
        .catch (error => {
            console.log(error);
            setMessage(true)
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
                {message ? (<p>user already exists</p>) : null }
          </form>
        </div>
    )
}
