import './oneCharacter.css'
export default function Character(props){
    let {item} = props
    return(<div>
        <div className={'card'}>
            <div className={'head_img'}>
                <div className={'header'}>
                    <h2 className={'id'}>{item.id}</h2>
                    <div className={'nameCharacter'}>
                        <h2 className={'text'}>{item.name}</h2>
                    </div>
                </div>
                <div className={'img'}><img src={item.image} alt=""/></div>
            </div>
            <div className={'info'}>
                <div className={'criterion'}>
                    <p> <b>Status</b> : {item.status} </p>
                    <p> <b>Species</b> : {item.species}</p>
                    <p> <b>Gender</b> : {item.gender}</p>
                </div>
            </div>
        </div>
    </div>)
}