'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { isEmpty } from 'lodash';
import * as z from 'zod';

import { Send } from 'src/components/Icons';
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import ChatAnimation from 'src/components/ui/chatAnimation';
import { Divider } from 'src/components/ui/divider';
import { Textarea } from 'src/components/ui/textarea';
import { useSuggestStatus } from 'src/queries';

const postSchema = z.object({
  content: z
    .string()
    .min(1, 'Nội dung không được để trống')
    .max(500, 'Nội dung không được vượt quá 500 ký tự'),
});

type PostFormValues = z.infer<typeof postSchema>;

type Props = {
  onToggle: (value: boolean) => void;
};

const FormCreatePost: React.FC<Props> = ({ onToggle }) => {
  const [status, setStatus] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = (data: PostFormValues) => {
    console.log(data);
    onToggle(false);
    form.reset();
  };

  const { mutate: suggestStatus, isPending } = useSuggestStatus({
    onSuccess(data) {
      setSuggestions(data.suggestions);
    },
  });

  return (
    <>
      <div className="grid grid-cols-4 gap-4 h-[56px]">
        <div className="col-span-1 px-6 flex items-center">
          <span
            className="text-ellipsis text-base cursor-pointer"
            onClick={() => onToggle(false)}
          >
            Hủy
          </span>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <span className="text-ellipsis text-base font-bold">Thread mới</span>
        </div>
        <div className="col-span-1" />
      </div>
      <Divider />
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-4 px-6">
        <div className="grid grid-cols-[var(--column-width)_minmax(0,1fr)]">
          <div className="row-start-1 row-span-2 col-start-1 pt-1">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center w-9 h-full">
              <div className="w-[1px] h-full bg-black-quartz-12 mt-2" />
              <Avatar className="h-4 w-4 opacity-60">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="col-start-2 row-start-1 flex h-[21px]">
            <div className="flex gap-1">
              <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-base font-semibold">
                dieptr_tran
              </span>
            </div>
          </div>
          <div className="col-start-2 row-span-2">
            <div className="flex-1 cursor-text flex items-center">
              <Textarea
                placeholder="Có gì mới?"
                className="border-none focus-visible:ring-0 max-h-[500px] resize-none px-0 focus-visible:ring-offset-0"
                {...form.register('content')}
              />
            </div>
            {form.formState.errors.content && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.content.message}
              </p>
            )}
            <div className="flex gap-1 mt-2 justify-end">
              <Button
                type="submit"
                variant="outline"
                className="min-w-9 h-9 rounded-md border-[#f3f5f726] font-bold"
                disabled={
                  form.formState.isSubmitting || isEmpty(form.watch('content'))
                }
              >
                Đăng
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-[var(--column-width)_minmax(0,1fr)]">
        <div className="col-start-2 row-start-4">
          <div className="flex gap-2 pr-6">
            <Textarea
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="What's your question for AI?"
              className="border-none focus-visible:ring-0 max-h-[500px] resize-none px-0 focus-visible:ring-offset-0"
            />
            <Button
              variant="outline"
              disabled={isPending || isEmpty(status)}
              onClick={() => suggestStatus({ question: status })}
              className="rounded-full h-9 w-9 border-[#f3f5f726] font-bold"
            >
              <Send />
            </Button>
          </div>
          <div className="pb-6 pr-6">
            {!isEmpty(suggestions) && (
              <ChatAnimation
                text={suggestions[0].replaceAll('<rhyme>', '') as string}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCreatePost;
