//import { anecdoteHandler } from "../reducers/anecdoteReducer";
//import { newAnec } from "../reducers/anecdoteReducer";
import { createAnecdote } from "../reducers/anecdoteReducer";
//import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch();

  const addingAnecdote = (e) => {
    e.preventDefault();
    const newAnecdote = e.target.anecdote.value;
    props.createAnecdote(newAnecdote);
    //console.log("befoew setmessage");

    props.setNotification(`"${newAnecdote}" has been added`, 5);

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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
};

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm);
export default ConnectedForm;
