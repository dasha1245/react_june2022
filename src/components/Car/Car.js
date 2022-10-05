const Car = ({car}) => {
    const {id, model, year, price} = car
    return (
        <div>
            <div>
                <h3>{model}</h3>
                <h4>{id}</h4>
                <p> year:{year}</p>
                <p>You can buy it just for {price}$</p>
                <hr/>
            </div>
        </div>
    );
};

export {Car}