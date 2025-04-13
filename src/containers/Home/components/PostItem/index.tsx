'use client';

import { useState } from 'react';

import Link from 'next/link';

import NumberFlow from '@number-flow/react';

import { Like, Repost, Share } from 'src/components/Icons';
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';
import { useLike, useUnlike } from 'src/queries/like';
import { timeAgo } from 'src/utils/helpers';
import Storage from 'src/utils/storage';

import CreateComment from './components/CreateComment';
import PostMenu from './components/PostMenu';
import ProfileCard from './components/ProfileCard';

interface Props {
  follower?: boolean;
  following?: boolean;
  entity: Model.Post;
}

const PostItem: React.FC<Props> = ({ follower, following, entity }) => {
  const userInfo = Storage.getUserInfo();

  const [value, setValue] = useState<number>(entity?.post?.total_likes || 0);

  const [isLiked, setIsLiked] = useState<boolean>(
    entity?.post?.is_liked || false,
  );

  const { mutate: mutateLike } = useLike();

  const { mutate: mutateUnLike } = useUnlike();

  return (
    <div className="px-6 py-3">
      <div className="grid grid-cols-[var(--column-width)_minmax(0,1fr)]">
        <div className="row-start-1 row-span-2 col-start-1">
          {follower && (
            <Link href={`/@${entity.post.user.username}`}>
              <Avatar className="h-9 w-9">
                <AvatarImage src={entity.post.user.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          )}
          {!follower && !following && <ProfileCard />}
        </div>
        <div className="col-start-2 row-start-1 flex justify-between h-[21px]">
          <div className="flex gap-1 cursor-pointer">
            <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-base font-semibold">
              {entity.post.user.username}
            </span>
            <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-[15px] text-grey-3 font-(--font-family-system)">
              {timeAgo(entity.post.created_at)}
            </span>
          </div>
          <div>
            <PostMenu />
          </div>
        </div>
        <div className="col-start-2 row-start-2">
          <div>{entity.post.content}</div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              className="min-w-9 h-9"
              onClick={() => {
                if (!isLiked) {
                  mutateLike({
                    user_id: userInfo?.id,
                    post_id: entity.post.id,
                  });
                  setValue(value + 1);
                  setIsLiked(true);
                  return null;
                }

                mutateUnLike({
                  user_id: userInfo?.id,
                  post_id: entity.post.id,
                });
                setValue(value - 1);
                setIsLiked(false);
              }}
            >
              <Like
                className={cn('!w-5 !h-5 fill-transparent stroke-current', {
                  'fill-[#ff0000] text-[#ff0000]': isLiked,
                })}
              />

              <NumberFlow
                value={value}
                className={cn({ 'text-[#ff0000]': isLiked })}
                format={{ notation: 'compact' }}
              />
            </Button>
            <CreateComment postEntity={entity.post} />
            <Button variant="ghost" className="min-w-9 h-9">
              <Repost className="!w-5 !h-5 fill-white" />
            </Button>
            <Button variant="ghost" className="min-w-9 h-9">
              <Share className="!w-5 !h-5 fill-transparent stroke-current" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
