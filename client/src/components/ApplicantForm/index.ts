import {connect} from 'react-redux'
import ApplicantForm from './ApplicantForm'
import {IStore} from '../../ducks/interfaces'

import {
    IReducerRecord,
    isOpenSubmitWindowSelector,
    setOpenSubmitWindow,
    isOpenPolicyWindowSelector,
    setOpenPolicyWindow,
    checkedValuesSelector,
    setCheckedValues,
    isSubmitAvailableSelector,
    setSubmitAvailable,
    userNameSelector,
    formDataSelector,
    formDataHandler


} from '../../ducks/applicatForm'

export default connect((state: IStore<IReducerRecord>) => ({
    isOpenSubmitWindow: isOpenSubmitWindowSelector(state),
    isOpenPolicyWindow: isOpenPolicyWindowSelector(state),
    checkedValues: checkedValuesSelector(state),
    isSubmitAvailable: isSubmitAvailableSelector(state),
    userName: userNameSelector(state),
    formData: formDataSelector(state),
}), {
    setOpenSubmitWindow,
    setOpenPolicyWindow,
    setCheckedValues,
    setSubmitAvailable,
    formDataHandler,
})(ApplicantForm)