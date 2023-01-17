//import { voteHandler } from "../reducers/anecdoteReducer";
import { newVote } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const dispatch = useDispatch();
  const vote = (id) => {
    dispatch(newVote(id));
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
