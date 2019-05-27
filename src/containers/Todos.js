import { connect } from "react-redux";
import { changeTitle } from "../actions/Actions";
import Home from "../components/Home";

const mapStateToProps = (state, ownProps) => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  changeTitle: payload => dispatch(changeTitle(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
