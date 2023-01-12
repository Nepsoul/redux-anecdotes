const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  //console.log(anecdote, "anecdote");
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);
//console.log(initialState, "initialstate");

//reducer function for voting
const reducer = (state = initialState, action) => {
  // console.log("state now: ", state);
  // console.log("action", action);
  console.log("actiontype", action);

  switch (action.type) {
    case "VOTING":
      //action
      const newVote = state.map((anecdote) => {
        // console.log(anecdote, "return anec");
        if (anecdote.id === action.id) {
          return { ...anecdote, votes: anecdote.votes + action.votes };
        }
        return anecdote;
      });
      console.log(newVote, "newVote");
      return newVote;
    default:
      return state;
  }
};

export default reducer;
