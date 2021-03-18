import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date}</td>
        <td>
            <Link to={'/edit/'+props.exercise._id}>edit</Link> | <button onClick={() => {props.deleteExercise(props.exercise._id)}}>delete</button>
        </td>
    </tr>

)

export default function ExerciseList() {
    const [fields, setFields] = useState({
        exercises: []
    });

      

    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
        .then(res => {
            setFields({ exercises: res.data })
        })
        .catch (error => {
            console.log(error);
          });
    }, []);

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/'+ id)
        .then(res => {console.log(res.data)});
        setFields({
            exercises: fields.exercises.filter(el => el._id !== id)
        })
    };

    const exerciseList = () => {
        return fields.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id}/>;
        })
    }

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {exerciseList()}
                </tbody>
            </table>
        </div>
    )
}
