import './App.css';
import {Route, Routes} from "react-router-dom"

import {MainLayout} from "./layouts";
import {CommentsPage, PostsPage, UsersPage} from "./pages";
import {PostDetails, UserDetails} from "./components";

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route path={'/users'} element={<UsersPage/>}>
              <Route path={'/users/:userId'} element={<UserDetails/>}/>
          </Route>
          <Route path={'/posts'} element={<PostsPage/>}>
            <Route path={'/posts/:postId'} element={<PostDetails/>}/>
          </Route>
          <Route path={'/comments'} element={<CommentsPage/>}/>
      </Route>
    </Routes>
  )
}

export default App;
