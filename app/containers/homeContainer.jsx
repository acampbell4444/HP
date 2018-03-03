import Home from '../components/Home'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  //get user from auth
  return {
    //user,
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)