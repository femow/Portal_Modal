import classes from './Form.module.css'

import Button from '../UI/Button'
import MsgModal from '../Modal/MsgModal'
import { useRef, useState } from 'react'

const Form = props => {
    const ref_first_name = useRef()
    const ref_last_name = useRef()
    const [msgError, setMsgError] = useState(null)

    const onSubmitHandler = e => {
        e.preventDefault();
        const first_name = ref_first_name.current.value;
        const last_name = ref_last_name.current.value;
        if(first_name.trim().length === 0 || last_name.trim().length === 0) {
            setMsgError({msg: 'Please, to register a new user fill the inputs', title: 'Fill the inputs'})
            return;
        }
        props.addUserHandler({first_name: first_name, last_name: last_name})
        ref_first_name.current.value = '';
        ref_last_name.current.value = '';
    }

    const onOkModal = e => {
        setMsgError(null);
    }

    return(
        <>
            { msgError && <MsgModal title={msgError.title} message={msgError.msg} onOkModal={onOkModal}/>}
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <label htmlFor="name">First name</label>
                <input name="name" type="text" autoFocus ref={ref_first_name} />
                <label htmlFor="lname">Last name</label>
                <input name="lname" type="text" ref={ref_last_name} />
                <Button type="submit" >Register</Button>
            </form>
        </>
    )
}

export default Form;