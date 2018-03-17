import NavBar from '../components/NavBar'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	let currentRoute = state.navBar.currentRoute
    let user = ownProps.user
  //const currentComponent = state.auth.currentComponent
  return {
    user,
    currentRoute
    //currentComponent
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)