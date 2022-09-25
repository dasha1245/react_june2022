const Todo = (props) => {
    const {todo} = props;

    return (
        <div>
            <div>
                <ul>
                    <li>{todo.title}</li>
                </ul>
            </div>
        </div>
    );
}

export {Todo}