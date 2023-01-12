import { useSelector, useDispatch } from "react-redux";
import { asObject } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    //console.log("vote", id);
    dispatch({
      type: "VOTING",
      id,
    });
  };

  const addingAnecdote = (e) => {
    e.preventDefault();
    const newAnecdote = e.target.anecdote.value;
    // console.log(e.target, "event.target");
    // console.log(e.target.anecdote, "event target anec");
    // console.log(e.target.anecdote.value, "event target value");

    //console.log(newAnecdote, "new anec");
    e.target.anecdote.value = "";
    dispatch(asObject(newAnecdote));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

export default App;
