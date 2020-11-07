import { connect } from 'react-redux'
import UsersLanding from '../Components/UsersLanding';

const mapStateToProps = state => ({
  Users: state.Users
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UsersLanding);
