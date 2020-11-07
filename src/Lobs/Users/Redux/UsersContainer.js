import { connect } from 'react-redux'
import UsersLanding from '../Components/UsersLanding';
import {fetchUsers} from '../Redux/UsersAction';

const mapStateToProps = state => ({
  ...state.Users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersLanding);
