'use client';

import React from 'react';

import Link from 'next/link';

import PostThread from 'src/components/core/PostThread';
import Header from 'src/components/layouts/Header';
import { Divider } from 'src/components/ui/divider';
import { useFetchNewsFeed } from 'src/queries/news-feed';
import Storage from 'src/utils/storage';

import CreatePost from './components/CreatePost';

const Home = () => {
  const userInfo = Storage.getUserInfo();

  const { data: newsFeed } = useFetchNewsFeed({
    take: 10,
    page: 1,
  });

  return (
    <div className="flex justify-center min-h-screen px-10 bg-black-1">
      <div className="container max-w-[700px]">
        <Header />
        <div className="border border-solid border-grey-2 pt-2 overflow-x-hidden shadow-[0_0_12px_0_#0000000a] bg-black-quartz-1 rounded-tr-3xl rounded-tl-3xl">
          {userInfo && (
            <>
              <CreatePost />
              <Divider />
            </>
          )}
          {(newsFeed?.data || []).map((post, index) => (
            <React.Fragment key={index}>
              <PostThread entity={post.post} />
              <Divider />
            </React.Fragment>
          ))}
        </div>
      </div>
      {!userInfo && (
        <div className="flex flex-col items-center justify-center gap-3 border border-solid border-grey-2 py-8 px-6 mt-[60px] w-[337px] h-[220px] overflow-x-hidden ml-4 shadow-[0_0_12px_0_#0000000a] bg-black-quartz-1 rounded-3xl">
          <span className="text-white text-[20px] font-bold text-center">
            Log in or sign up for Threads
          </span>
          <span className="text-grey-3 text-sm-1.5 text-center">
            See what people are talking about and join the conversation.
          </span>
          <Link
            href="/register"
            className="text-grey-3 text-sm-1.5 text-center hover:text-white transition-all duration-300"
          >
            Sign up with a username
          </Link>
          <Link
            href="/login"
            className="text-grey-3 text-sm-1.5 text-center hover:text-white transition-all duration-300"
          >
            Sign in with a username
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
