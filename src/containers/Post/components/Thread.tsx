'use client';

import { FC } from 'react';

import dayjs from 'dayjs';

import {
  Like,
  MoreHorizontal,
  Reply,
  Repost,
  Share,
} from 'src/components/Icons';
import { Avatar, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import { formatNumber } from 'src/utils/helpers';

interface Props {
  entities?: Model.PostEntity[];
}

const Thread: FC<Props> = ({ entities }) => {
  return (
    <>
      {(entities || []).map((entity, index) => (
        <div className="px-6 py-3" key={index}>
          {/* <div className="flex items-center gap-2 text-gray-400 mb-2 ml-4">
            <Star className="w-3 h-3" />
            <span className="text-grey-3 text-sm">Đã ghim</span>
          </div> */}
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={entity.user?.avatar || ''} />
            </Avatar>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">
                    {entity.user?.name || entity.user?.username || ''}
                  </span>
                  <span className="text-gray-400">
                    {dayjs(entity.createdAt).format('DD/MM/YYYY')}
                  </span>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-6 w-6"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-1">
                <p>{entity?.content}</p>
              </div>
              <div className="flex items-center gap-6 mt-3">
                <Button
                  variant="ghost"
                  className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
                >
                  <Like className="!w-5 !h-5 fill-transparent stroke-current" />
                  <span>{formatNumber(entity.totalLikes)}</span>
                </Button>
                <Button
                  variant="ghost"
                  className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
                >
                  <Reply className="!w-5 !h-5 fill-transparent stroke-current" />
                  <span>{formatNumber(entity.totalComments)}</span>
                </Button>
                <Button
                  variant="ghost"
                  className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
                >
                  <Repost className="!w-5 !h-5 fill-white" />
                </Button>
                <Button
                  variant="ghost"
                  className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
                >
                  <Share className="!w-5 !h-5 fill-transparent stroke-current" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Thread;
