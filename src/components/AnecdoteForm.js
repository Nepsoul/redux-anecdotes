//import { anecdoteHandler } from "../reducers/anecdoteReducer";
//import { newAnec } from "../reducers/anecdoteReducer";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addingAnecdote = (e) => {
    e.preventDefault();
    const newAnecdote = e.target.anecdote.value;
    dispatch(createAnecdote(newAnecdote));
    //console.log("befoew setmessage");

    dispatch(setNotification(`"${newAnecdote}" has been added`, 5));

    e.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>create new</h2>

      <form onSubmit={addingAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
