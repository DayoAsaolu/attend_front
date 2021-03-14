import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { FormControl, TextField, Button, Paper } from '@material-ui/core';
import useStyles from './styles';

import "./styles.css";

const Form = ({ currentId, setCurrentId }) => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const classes = useStyles();

  const onSubmit = data => {
    console.log(data);
  };

  const addFriend = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeFriend = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFriends = () => {
    setIndexes([]);
  };

  return (
    <Paper className={classes.paper1}>

    <form onSubmit={handleSubmit(onSubmit)}>
      {indexes.map(index => {
        const fieldName = `friends[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              First Name {index}:
              <input
                type="text"
                name={`${fieldName}.firstName`}
                ref={register}
              />
            </label>

            <label>
              Last Name {index}:
              <input
                type="text"
                name={`${fieldName}.lastName`}
                ref={register}
              />
            </label>
            <button type="button" onClick={removeFriend(index)}>
              Remove
            </button>
          </fieldset>
        );
      })}

      <button type="button" onClick={addFriend}>
        Add Friend
      </button>
      <button type="button" onClick={clearFriends}>
        Clear Friends
      </button>
      <input type="submit" />
    </form>
    </Paper>
  );
}

export default Form;
