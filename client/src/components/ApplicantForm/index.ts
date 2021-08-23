import {connect} from 'react-redux'
import ExampleForm from './ExampleForm'
import {IStore} from '../../ducks/interfaces'

import {
    IReducerRecord,    
    isOpenSubmitWindowSelector,
    setOpenSubmitWindow,
    isOpenPolicyWindowSelector,
    setOpenPolicyWindow,    
} from '../../ducks/applicatForm'

export default connect((state: IStore<IReducerRecord>) => ({
    isOpenSubmitWindow: isOpenSubmitWindowSelector(state),   
    isOpenPolicyWindow: isOpenPolicyWindowSelector(state),   
}), {
    setOpenSubmitWindow,
    setOpenPolicyWindow
})(ExampleForm)