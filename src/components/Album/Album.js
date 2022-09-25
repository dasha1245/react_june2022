const Album = (props) => {
    const {album} = props
    return (
        <div>
            <div>
                <h4>{album.id} --- {album.title}</h4>
            </div>
        </div>
    );
};

export {Album}