import { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Form from '../Form/Form'
import ListUsers from '../UI/ListUsers'

const AddUser = props => {
    const [list_users, setList_users] = useState([])

    const addUserHandler = user => {
        setList_users(prevList => [user, ...prevList])
    }

    return(
        <div className={classes.adduser}>
            <Card>
                <Form addUserHandler={addUserHandler}/>
            </Card>
            <ListUsers list_users={list_users} />
        </div>
    )
}

export default AddUser;