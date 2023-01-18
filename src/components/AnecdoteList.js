//import { voteHandler } from "../reducers/anecdoteReducer";
import { newVote } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";
import {
  setMessage,
  timeoutNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);

  const dispatch = useDispatch();
  const vote = (id) => {
    const increaseAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(newVote(id));

    dispatch(setMessage(`you voted "${increaseAnecdote.content}"`));
    setTimeout(() => {
      dispatch(timeoutNotification());
    }, 3000);
  };

  const sortedVotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedVotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
