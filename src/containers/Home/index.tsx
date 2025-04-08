'use client';

import Link from 'next/link';

import Header from 'src/components/layouts/Header';
import { Divider } from 'src/components/ui/divider';
import Post from 'src/containers/Home/components/Post';
import Storage from 'src/utils/storage';

import NewPost from './components/NewPost';

const Home = () => {
  const userInfo = Storage.getUserInfo();
  console.log('userInfo', userInfo);

  return (
    <div className="flex justify-center min-h-screen px-10 bg-black-1">
      <div className="container max-w-[700px]">
        <Header />
        <div className="border border-solid border-grey-2 pt-2 overflow-x-hidden shadow-[0_0_12px_0_#0000000a] bg-black-quartz-1 rounded-tr-3xl rounded-tl-3xl">
          {userInfo && (
            <>
              <NewPost />
              <Divider />
            </>
          )}
          <Post follower />
          <Divider />
          <Post />
        </div>
      </div>
      {!userInfo && (
        <div className="flex flex-col items-center justify-center gap-3 border border-solid border-grey-2 py-8 px-6 mt-[60px] w-[337px] h-[220px] overflow-x-hidden ml-4 shadow-[0_0_12px_0_#0000000a] bg-black-quartz-1 rounded-3xl">
          <span className="text-white text-[20px] font-bold text-center">
            Đăng nhập hoặc đăng <br /> ký Threads
          </span>
          <span className="text-grey-3 text-[15px] text-center">
            Xem mọi người đang nói về điều gì và tham gia cuộc trò chuyện.
          </span>
          <Link
            href="/login"
            className="text-grey-3 text-[15px] text-center hover:text-white transition-all duration-300"
          >
            Đăng nhập bằng tên người dùng
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
