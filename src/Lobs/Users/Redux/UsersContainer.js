import { connect } from 'react-redux'
import UsersLanding from '../Components/UsersLanding';

const mapStateToProps = state => ({
  Users: state.UsersLanding
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UsersLanding);
