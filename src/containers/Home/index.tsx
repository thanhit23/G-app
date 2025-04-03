import {Divider} from "src/components/ui/divider";
import Header from 'src/components/layouts/Header';

import NewPost from "./components/NewPost";
import Post from "src/containers/Home/components/Post";

const Home = () => {
  return (
    <div className="flex justify-center min-h-screen px-10 bg-black-1">
      <div className="container max-w-[700px]">
        <Header />
        <div className="border border-solid border-grey-2 pt-2 overflow-x-hidden shadow-[0_0_12px_0_#0000000a] bg-black-quartz-1 rounded-tr-3xl rounded-tl-3xl">
          <NewPost />
          <Divider />
          <Post follower />
          <Divider />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Home;
