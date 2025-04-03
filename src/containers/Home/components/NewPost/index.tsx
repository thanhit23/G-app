'use client';

import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog';

import FormCreatePost from './FormCreatePost';

const NewPost = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="px-6 py-4 flex items-center gap-2">
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="flex-1">
          <div className="flex-1 cursor-text h-9 flex items-center">
            <span className="text-grey-3 text-[15px]">Có gì mới?</span>
          </div>
        </DialogTrigger>
        <DialogContent className="border-[#f3f5f726] p-0 max-w-[620px] gap-0 rounded-3xl">
          <DialogTitle className="hidden" />
          <FormCreatePost onToggle={setOpen} />
        </DialogContent>
      </Dialog>
      <div>
        <Button
          variant="outline"
          className="rounded-[10px] font-semibold border-[#f3f5f726]"
        >
          Đăng
        </Button>
      </div>
    </div>
  );
};

export default NewPost;
