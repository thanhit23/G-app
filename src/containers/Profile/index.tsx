'use client';

import { useParams } from 'next/navigation';

import {
  Bell,
  Like,
  More,
  MoreHorizontal,
  Reply,
  Repost,
  Share,
} from 'src/components/Icons';
import InstagramIcon from 'src/components/Icons/Instagram';
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs';
import { useFetchPostsProfile } from 'src/queries/post';
import { useProfile } from 'src/queries/user';
import { formatNumber } from 'src/utils/helpers';

import Header from './components/Header';
import Thread from './components/Thread';

export default function ProfilePage() {
  const router = useParams();

  const { data } = useProfile(
    {
      username: (
        decodeURIComponent((router.slug as string) || '') || ''
      ).replace('@', ''),
    },
    { enabled: !!router.slug },
  );

  const { data: posts } = useFetchPostsProfile(
    {
      username: (
        decodeURIComponent((router.slug as string) || '') || ''
      ).replace('@', ''),
      take: 10,
      page: 1,
    },
    { enabled: !!router.slug },
  );

  return (
    <div className="flex justify-center min-h-screen px-10 bg-black-1">
      <div className="container max-w-[700px]">
        <Header />
        <div className="mt-2 rounded-3xl bg-black-quartz-1 border border-solid border-grey-2 overflow-hidden">
          <div className="pt-4 px-6 pb-[10px]">
            <div className="flex justify-between items-center mb-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">
                  {data?.name ?? (data?.username || '')}
                </h1>
                <p className="text-base text-gray-400">
                  {data?.username || ''}
                </p>
              </div>
              <Avatar className="h-20 w-20 rounded-full">
                <AvatarImage src={data?.avatar || ''} alt="Profile" />
                <AvatarFallback>CLC</AvatarFallback>
              </Avatar>
            </div>

            <div className="px-6 py-4">
              <p className="text-base text-gray-400">{data?.bio || ''}</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="mb-4">
                <p className="text-grey-3 text-[15px]">
                  {formatNumber(data?.countFollowers || 0)} người theo dõi
                </p>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <InstagramIcon />
                <Bell className="w-6 h-6" />
                <More className="w-6 h-6" />
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <Button
                variant="outline"
                className="flex-1 hover:bg-white/90 hover:text-black border-[#f3f5f726] text-white font-semibold rounded-lg"
              >
                Đang theo dõi
              </Button>
              <Button
                variant="outline"
                className="flex-1 hover:bg-white/90 hover:text-black border-[#f3f5f726] text-white font-semibold rounded-lg"
              >
                Nhắc đến
              </Button>
            </div>
          </div>

          <Tabs defaultValue="thread" className="w-full mt-2">
            <TabsList className="w-full justify-between bg-transparent border-b border-[#2f3336]">
              <TabsTrigger
                value="thread"
                className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none py-3 font-semibold"
              >
                Thread
              </TabsTrigger>
              <TabsTrigger
                value="replies"
                className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none text-gray-500 py-3 font-semibold"
              >
                Thread trả lời
              </TabsTrigger>
              <TabsTrigger
                value="reposts"
                className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none text-gray-500 py-3 font-semibold"
              >
                Bài đăng lại
              </TabsTrigger>
            </TabsList>

            <TabsContent value="thread" className="divide-y divide-[#2f3336]">
              <Thread entities={posts as Model.PostEntity[]} />
            </TabsContent>

            <TabsContent value="replies">
              <div className="px-6 pb-3">
                <div className="flex items-start gap-3">
                  <div className="h-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xrYKieEfN_JLAweDrQMEVA.png" />
                      <AvatarFallback>CLC</AvatarFallback>
                    </Avatar>
                    <div className="w-[1px] h-full bg-grey-2" />
                  </div>
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
                      <p>《殞瘓》</p>
                      <p className="text-base">
                        你燒了整段的年華方盤 才懂了往後再找不著快樂
                      </p>
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

              <div className="px-6 pb-3">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xrYKieEfN_JLAweDrQMEVA.png" />
                    <AvatarFallback>CLC</AvatarFallback>
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
                      <p>《殞瘓》</p>
                      <p className="text-base">
                        你燒了整段的年華方盤 才懂了往後再找不著快樂
                      </p>
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
            </TabsContent>

            <TabsContent value="reposts">
              <div className="px-6 px-3">
                <div className="flex items-center gap-2 text-gray-400 mb-2 ml-4">
                  <Repost className="fill-gray-400 w-3 h-3" />
                  <span className="text-grey-3 text-sm">
                    clc._.688 đã đăng lại
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xrYKieEfN_JLAweDrQMEVA.png" />
                    <AvatarFallback>CLC</AvatarFallback>
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
                      <p>《殞瘓》</p>
                      <p className="text-base">
                        你燒了整段的年華方盤 才懂了往後再找不著快樂
                      </p>
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

              <div className="px-6 px-3">
                <div className="flex items-center gap-2 text-gray-400 mb-2 ml-4">
                  <Repost className="fill-gray-400 w-3 h-3" />
                  <span className="text-grey-3 text-sm">
                    clc._.688 đã đăng lại
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xrYKieEfN_JLAweDrQMEVA.png" />
                    <AvatarFallback>CLC</AvatarFallback>
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
                      <p>《殞瘓》</p>
                      <p className="text-base">
                        你燒了整段的年華方盤 才懂了往後再找不著快樂
                      </p>
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
