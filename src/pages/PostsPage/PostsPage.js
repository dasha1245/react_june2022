import {Outlet} from "react-router";

import {Posts} from "../../components";

const PostsPage = () => {
    return (
        <div>
            <Outlet/>
            <Posts/>
        </div>
    );
};

export {PostsPage}