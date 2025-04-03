import {Button} from "src/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "src/components/ui/avatar";
import {Like, Reply, Repost, Share} from "src/components/Icons";
import PostMenu from "./PostMenu"
import ProfileCard from "./ProfileCard"
import Link from "next/link";

interface Props {
  follower?: boolean;
  following?: boolean;
}

const Post: React.FC<Props> = ({ follower, following }) => {
  return (
    <div className="px-6 py-3">
      <div className="grid grid-cols-[var(--column-width)_minmax(0,1fr)]">
        <div className="row-start-1 row-span-2 col-start-1">
          {follower && (
            <Link href="/@dieptr_tran">
              <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </Link>
          )}
          {!follower && !following && (
            <ProfileCard />
          )}
        </div>
        <div className="col-start-2 row-start-1 flex justify-between h-[21px]">
          <div className="flex gap-1 cursor-pointer">
            <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-base font-semibold">
              dieptr_tran
            </span>
            <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-[15px] text-grey-3 font-(--font-family-system)">
              21 giờ
            </span>
          </div>
          <div>
            <PostMenu />
          </div>
        </div>
        <div className="col-start-2 row-start-2">
          <div>Update:</div>
          <div className="flex gap-1">
            <Button variant="ghost" className="min-w-9 h-9">
              <Like className="!w-5 !h-5 fill-transparent stroke-current"/>
            </Button>
            <Button variant="ghost" className="min-w-9 h-9">
              <Reply className="!w-5 !h-5 fill-transparent stroke-current"/>
            </Button>
            <Button variant="ghost" className="min-w-9 h-9">
              <Repost className="!w-5 !h-5 fill-white"/>
            </Button>
            <Button variant="ghost" className="min-w-9 h-9">
              <Share className="!w-5 !h-5 fill-transparent stroke-current"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
