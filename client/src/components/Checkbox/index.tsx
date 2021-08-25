import {connect} from 'react-redux'
import Checkbox from './Checkbox'
import {IStore} from '../../ducks/interfaces'

import {
    IReducerRecord,        
    isPrivatePolicyCheckedSelector,
    setPrivatePolicyChecked,
} from '../../ducks/applicatForm'

export default connect((state: IStore<IReducerRecord>) => ({
    isPrivatePolicyChecked: isPrivatePolicyCheckedSelector(state),    
}), {
    setPrivatePolicyChecked
})(Checkbox)