"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"
import { Button } from "src/components/ui/button"
import { Plus } from "src/components/Icons"

const ProfileCard = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer relative group h-9 w-9">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white text-black flex items-center justify-center">
            <Plus />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[300px] p-0 bg-black-quartz-1 border-black-quartz-12 rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Thông tin người dùng</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div className="space-y-1">
              <h4 className="text-base font-bold">Nguyễn Huyền</h4>
              <p className="text-sm text-grey-3">_just._.h</p>
            </div>
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>NH</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-3">
            <p className="text-sm">Cái pro5 dùng để x2 sự spam</p>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-grey-3">
            <span className="font-bold text-white">207</span>
            <span>người theo dõi</span>
          </div>
          <Button className="rounded-md w-full font-bold bg-white hover:bg-white/90 text-black mt-2">
            Theo dõi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProfileCard;
