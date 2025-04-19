'use client';

import React from 'react';

import { Plus } from 'src/components/Icons';
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog';
import { useFollowUser } from 'src/queries/follow';
import Storage from 'src/utils/storage';

type Props = {
  entity: Model.User;
};

const ProfileCard: React.FC<Props> = ({ entity }) => {
  const userInfo = Storage.getUserInfo();

  const [open, setOpen] = React.useState(false);

  const { mutate } = useFollowUser({
    onSuccess() {
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer relative group h-9 w-9">
          <Avatar className="h-9 w-9">
            <AvatarImage src={entity?.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white text-black flex items-center justify-center">
            <Plus />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[300px] p-0 bg-black-quartz-1 border-black-quartz-12 rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>User information</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div className="space-y-1">
              <h4 className="text-base font-bold">
                {entity?.name ?? entity?.username}
              </h4>
              <p className="text-sm text-grey-3">{entity?.username}</p>
            </div>
            <Avatar className="h-16 w-16">
              <AvatarImage src={entity?.avatar} />
              <AvatarFallback>NH</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-3">
            <p className="text-sm">{entity?.bio}</p>
          </div>
          <div className="flex items-center gap-1 mt-3 text-sm text-grey-3">
            <span className="font-bold text-white">
              {entity?.totalFollower}
            </span>
            <span>Followers</span>
          </div>
          <Button
            className="rounded-md w-full font-bold bg-white hover:bg-white/90 text-black mt-2"
            onClick={() =>
              mutate({
                sourceUserId: userInfo?.id || '',
                targetUserId: entity.id,
              })
            }
          >
            Theo dõi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileCard;
