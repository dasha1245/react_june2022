export default function Space(props){
    let {space} = props;

    return(<div className={'main'}>
        <div className={'card'}>
            <b>{space.mission_name}</b>
            <br/>
            {space.launch_year}
            <br/>
            <img src={space.links.mission_patch_small} alt=""/>
        </div>
    </div>)
}