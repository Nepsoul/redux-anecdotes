//import { voteHandler } from "../reducers/anecdoteReducer";
import { increaseVote } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  //console.log(anecdotes, "anecdote11");

  const searchValue = useSelector((state) => state.filter);
  // console.log(searchValue, "search");

  const dispatch = useDispatch();

  const vote = (id) => {
    const increaseAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(increaseVote(id, anecdotes));

    dispatch(setNotification(`you voted "${increaseAnecdote.content}"`, 5));
  };
  const filterList = anecdotes.filter((anecdote) => {
    return anecdote.content?.toLowerCase().includes(searchValue?.toLowerCase());
  });
  console.log(filterList, "filterAnec");

  const sortedVotes = [...filterList].sort((a, b) => b.votes - a.votes);
  console.log(sortedVotes, "sortvotes");
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
