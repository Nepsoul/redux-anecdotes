//import { useSelector } from "react-redux";
import { connect } from "react-redux";

const Notification = (props) => {
  //const notifications = useSelector((state) => state.notification);
  //console.log("notifications", notification);

  if (!props.notification) {
    return null;
  }

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <div style={style}>{props.notification}</div>;
};

const mapStateToProps = (state) => {
  return { notification: state.notification };
};

const ConnectedAnecdotes = connect(mapStateToProps)(Notification);
export default ConnectedAnecdotes;
