import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";

export default function CreateExercise(props) {
    const [fields, setFields] = useState({
        username: '',
        description: '',
        duration: 0,
        time: new Date(),
        users: []
    });

    const handleChange = e => {
        setFields({
            ...fields,
            [e.target.id]: e.target.value
        });
    }
    const handleDate = date => {
        setFields({
            ...fields,
            date: date
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const exercise = {
            username: fields.username,
            description: fields.description,
            duration: fields.duration,
            date: fields.date
        }
        console.log(exercise)
        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => {console.log(res.data)
            window.location='/';
        })
        
        .catch (error => {
            console.log(error);
        });
    }

    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(res => {
            if (res.data.length > 0) {
                setFields({
                    users: res.data.map(user => user.username),
                    username: res.data[0].username
                    
                })
            }
        })
    }, [])
    
    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select 
                    required id="username"
                    className="form-control"
                    value={fields.username}
                    onChange={handleChange}>
                        {fields.users.map(user => {
                            return <option
                                key={user}
                                value={user}> {user}
                                </option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                    id="description"
                    required
                    className="form-control"
                    value={fields.description}
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="text"
                    id="duration"
                    className="form-control"
                    value={fields.duration}
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                      <DatePicker 
                        selected={fields.date}
                        onChange={handleDate}/>
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>

            </form>
        </div>
    )
}
