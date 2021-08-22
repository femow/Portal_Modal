import Card from './Card'


const ListUsers = props => {
    return (
        <>
        {
            props.list_users.length > 0 &&
            <Card>
                {
                    props.list_users.map(u =>
                        <Card key={`${u.first_name} ${u.last_name}`}>
                            <p>{`${u.first_name} ${u.last_name}`}</p>
                        </Card>
                    )
                }
            </Card>
        }
        </>
    )
}

export default ListUsers