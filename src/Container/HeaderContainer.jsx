import Header from '../Components/Header'
import {connect} from 'react-redux'

  
const mapStateToProps = state =>({   //this function is used to get the state from the store and then we can use it in our component
   carTdata: state.cartItem
}
)
const mapDispatchToProps = dispatch => { //this function is used to dispatch the action to the store  and
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
