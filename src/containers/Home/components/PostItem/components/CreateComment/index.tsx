'use client';

import { useState } from 'react';

import { Reply } from 'src/components/Icons';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog';

import CreateCommentForm from './CreateCommentForm';

interface Props {
  postEntity: Model.PostEntity;
}

const CreateComment: React.FC<Props> = ({ postEntity }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex items-center gap-1">
        <Reply className="!w-5 !h-5 fill-transparent stroke-current" />
        <span className="text-sm">{postEntity?.total_comments || ''}</span>
      </DialogTrigger>
      <DialogContent className="border-[#f3f5f726] p-0 max-w-[620px] gap-0 rounded-3xl">
        <DialogTitle className="hidden" />
        <CreateCommentForm onToggle={setOpen} postEntity={postEntity} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateComment;
