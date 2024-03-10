import Home from '../Components/Home'
import {connect} from 'react-redux'
import {AddtoCart,RemovefromCart} from '../Services/Actions/action'
  
const mapStateToProps = state =>({   //this function is used to get the state from the store and then we can use it in our component
   carTdata: state.cartItem
}
)
const mapDispatchToProps = dispatch => { //this function is used to dispatch the action to the store  and
    return {
        AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
        RemovefromCartHandler: (data) => dispatch(RemovefromCart(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
