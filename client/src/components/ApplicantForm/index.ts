import {connect} from 'react-redux'
import ApplicantForm from './ApplicantForm'
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
})(ApplicantForm)