export default function User(props) {
    let {user, lift} = props

    return(<div>
        <h2>{user.id} - {user.name}</h2>
        <button onClick={() => {
            lift(user);
        }}>More info</button>

    </div>)
}