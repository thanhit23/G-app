'use client';

import { useParams } from 'next/navigation';

import ButtonLike from 'src/components/core/ButtonLike';
import CommentThread from 'src/components/core/CommentThread';
import { Reply, Repost, Share } from 'src/components/Icons';
import { Avatar, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import { Divider } from 'src/components/ui/divider';
import { useFetchPostDetail } from 'src/queries';
import { useFetchComments } from 'src/queries/comment';
import { formatNumber, timeAgo } from 'src/utils/helpers';

import Header from './components/Header';

export default function PostPage() {
  const params = useParams();

  const postId = (params?.post as string[])[2] || '';

  const { data: postDetail } = useFetchPostDetail(
    {
      limit: 10,
      id: postId,
    },
    {
      enable: !!postId,
    },
  );

  const { data } = useFetchComments(
    {
      limit: 10,
      postId,
      // after: '',
    },
    {
      enable: !!postId,
    },
  );

  return (
    <div className="flex justify-center min-h-screen px-10 bg-black-1">
      <div className="container max-w-[700px]">
        <Header />
        <div className="mt-2 rounded-3xl bg-black-quartz-1 border border-solid border-grey-2 overflow-hidden">
          <div className="pt-4 px-6 pb-[10px]">
            <div className="flex gap-2 items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={postDetail?.user?.avatar} />
              </Avatar>
              <div className="flex gap-1 items-center">
                <span className="font-semibold text-sm-1.5">
                  {postDetail?.user?.username}
                </span>
                <span className="text-sm-1.5 text-grey-3">
                  {timeAgo(postDetail?.createdAt)}
                </span>
              </div>
            </div>
            <div className="text-sm-1.5 pt-3">
              <span>{postDetail?.content || ''}</span>
            </div>
            <div className="flex items-center gap-2 mt-3 -ml-3">
              <ButtonLike entity={postDetail} name="postId" />
              <Button
                variant="ghost"
                className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full px-3"
              >
                <Reply className="!w-5 !h-5 fill-transparent stroke-current" />
                <span>{formatNumber(postDetail?.totalComments || 0)}</span>
              </Button>
              <Button
                variant="ghost"
                className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full px-3"
              >
                <Repost className="!w-5 !h-5 fill-white" />
              </Button>
              <Button
                variant="ghost"
                className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full px-3"
              >
                <Share className="!w-5 !h-5 fill-transparent stroke-current" />
              </Button>
            </div>
            <Divider className="mt-3 mb-5" />
            <div className="text-sm-1.5 font-semibold">
              <span>Reply thread</span>
            </div>
          </div>
          <Divider />
          {(data?.data || []).map((entity, index) => {
            return <CommentThread entity={entity} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
