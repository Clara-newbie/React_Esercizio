import { Routes, Route, Link } from "react-router-dom";
import Welcome_1 from "./Welcome_1";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";
import GithubUserList from "./GithubUserList";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users/octocat">GitHub User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome_1 name="Clara" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<h2>Add a user and select it</h2>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
