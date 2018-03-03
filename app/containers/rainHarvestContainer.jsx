import RainHarvest from '../components/RainHarvest'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  //get user from auth
  return {
    //user,
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RainHarvest)