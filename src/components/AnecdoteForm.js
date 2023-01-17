//import { anecdoteHandler } from "../reducers/anecdoteReducer";
import { newAnec } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addingAnecdote = (e) => {
    e.preventDefault();
    const newAnecdote = e.target.anecdote.value;
    dispatch(newAnec(newAnecdote));
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
