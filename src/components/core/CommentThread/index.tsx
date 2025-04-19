'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Repost, Share } from 'src/components/Icons';
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import { timeAgo } from 'src/utils/helpers';
import Storage from 'src/utils/storage';

import ButtonLike from '../ButtonLike';
import CommentCreate from './components/CommentCreate';
import PostMenu from './components/Menu';
import ProfileCard from './components/ProfileCard';

interface Props {
  entity: Model.PostEntity;
}

const CommentThread: React.FC<Props> = ({ entity }) => {
  const userInfo = Storage.getUserInfo();

  const router = useRouter();

  return (
    <div
      className="px-6 py-3 cursor-pointer"
      onClick={() => {
        router.push(`/${userInfo?.username.toLowerCase()}/post/${entity?.id}`);
      }}
    >
      <div className="grid grid-cols-[var(--column-width)_minmax(0,1fr)]">
        <div
          className="row-start-1 row-span-2 col-start-1"
          onClick={(e) => e.stopPropagation()}
        >
          {!entity?.hasFollowed ? (
            <ProfileCard entity={entity?.user} />
          ) : (
            <Link
              href={`/@${entity?.user?.username}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Avatar className="h-9 w-9">
                <AvatarImage src={entity?.user?.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          )}
        </div>
        <div className="col-start-2 row-start-1 flex justify-between h-[21px]">
          <div className="flex gap-1 cursor-pointer">
            <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-base font-semibold">
              {entity?.user?.username}
            </span>
            <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-sm-1.5 text-grey-3 font-(--font-family-system)">
              {timeAgo(entity?.createdAt)}
            </span>
          </div>
          <div>
            <PostMenu />
          </div>
        </div>
        <div className="col-start-2 row-start-2">
          <div>{entity?.content}</div>
          <div className="flex gap-1">
            <ButtonLike entity={entity} name="commentId" />
            <CommentCreate postEntity={entity} />
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

export default CommentThread;
