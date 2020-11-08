import {connect} from 'react-redux';
import PostsLanding from '../Components/PostsLanding';
import {fetchPosts} from '../Redux/PostsAction';

const mapStateToProps = state => ({
  ...state.Posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsLanding);
