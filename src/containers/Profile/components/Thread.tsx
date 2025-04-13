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
                    {dayjs(entity.created_at).format('DD/MM/YYYY')}
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
                  <span>14,4K</span>
                </Button>
                <Button
                  variant="ghost"
                  className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
                >
                  <Reply className="!w-5 !h-5 fill-transparent stroke-current" />
                  <span>131</span>
                </Button>
                <Button
                  variant="ghost"
                  className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
                >
                  <Repost className="!w-5 !h-5 fill-white" />
                  <span>131</span>
                </Button>
                <Button
                  variant="ghost"
                  className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
                >
                  <Share className="!w-5 !h-5 fill-transparent stroke-current" />
                  <span>131</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="px-6 py-3">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xrYKieEfN_JLAweDrQMEVA.png" />
          </Avatar>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold">clc._688</span>
                <span className="text-gray-400">20/02/2025</span>
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
              <p className="text-base">
                你扔了涉世未深的愚蠢 才懂念起了再換不回的天真
              </p>
            </div>
            <div className="mt-3 bg-[#0a0a0a] rounded-xl p-4">
              <div className="h-12 bg-[#2f3336] rounded-lg" />
            </div>
            <div className="flex items-center gap-6 mt-3">
              <Button
                variant="ghost"
                className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
              >
                <Like className="!w-5 !h-5 fill-transparent stroke-current" />
                <span>14,4K</span>
              </Button>
              <Button
                variant="ghost"
                className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
              >
                <Reply className="!w-5 !h-5 fill-transparent stroke-current" />
                <span>131</span>
              </Button>
              <Button
                variant="ghost"
                className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
              >
                <Repost className="!w-5 !h-5 fill-white" />
                <span>131</span>
              </Button>
              <Button
                variant="ghost"
                className="min-w-9 h-9 flex items-center gap-2 hover:bg-white/10 rounded-full"
              >
                <Share className="!w-5 !h-5 fill-transparent stroke-current" />
                <span>131</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thread;
