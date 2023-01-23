import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

const getId = () => (100000 * Math.random()).toFixed(0);

//action creator
// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

//const initialState = anecdotesAtStart.map(asObject);
//console.log("the initsate", initialState);

// //reducer function for voting
// const reducer = (state = initialState, action) => {
//   // console.log("state now: ", state);
//   // console.log("action", action);
//   console.log("actiontype", action.type);

// switch (action.type) {
//   case "VOTING":
//       const newVote = state.map((anecdote) => {
//         if (anecdote.id === action.data.id) {
//           return { ...anecdote, votes: anecdote.votes + 1 };
//         }
//         return anecdote;
//       });
//       //console.log(newVote, "newVote");
//       return newVote;

//     case "NEWANECDOTE":
//       const newAnec = asObject(action.data.content);
//       // console.log(action.content, "action.content");
//       console.log(newAnec, "newanec");
//       return [...state, newAnec];

//     default:
//       return state;
//   }
// };

// export default reducer;

// export function voteHandler(id) {
//   return { type: "VOTING", data: { id } };
// }

// export function anecdoteHandler(content) {
//   return { type: "NEWANECDOTE", data: { content } };
// }

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload;
      state.push({
        content,
        votes: 0,
        id: getId(),
      });
    },

    newVote(state, action) {
      // console.log("the state is", state);
      const id = action.payload;
      // console.log(id, "id");
      return state.map((anecdote) => {
        if (anecdote.id === id) {
          console.log("if enter");
          return { ...anecdote, votes: anecdote.votes + 1 };
        }

        return { ...anecdote };
      });
      //console.log(increaseAnec, "increaseane");
      //return increaseAnec;
    },

    // newAnec(state, action) {
    //   // console.log(action.payload);
    //   const content = action.payload;

    //   return [...state, content];
    // },

    appendAnecdote(state, action) {
      console.log(action.payload, "append");
      state.push(action.payload);
    },
    setAnecdote(state, action) {
      console.log(action.payload, "setanec");
      return action.payload;
    },
  },
});

export const { newVote, createAnecdote, appendAnecdote, setAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdote(anecdotes));
  };
};
