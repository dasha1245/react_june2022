export default function User(props) {
    let {user} = props

    return (
        <div className={'card'}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
        </div>
    );
};