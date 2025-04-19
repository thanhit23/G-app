'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { isEmpty } from 'lodash';
import * as z from 'zod';

import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar';
import { Button } from 'src/components/ui/button';
import { Divider } from 'src/components/ui/divider';
import { Textarea } from 'src/components/ui/textarea';
import { useCreationComment } from 'src/queries/comment';
import { timeAgo } from 'src/utils/helpers';
import Storage from 'src/utils/storage';

const schema = z.object({
  content: z
    .string()
    .min(1, 'Content cannot be empty')
    .max(500, 'Content must not exceed 255 characters'),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onToggle: (value: boolean) => void;
  postEntity: Model.PostEntity;
};

const CreateForm: React.FC<Props> = ({ onToggle, postEntity }) => {
  const userInfo = Storage.getUserInfo();

  const { mutate: mutateCreationComment } = useCreationComment({
    onSuccess: () => {
      onToggle(false);
      form.reset();
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      content: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    mutateCreationComment({ ...data, post_id: postEntity.id });
  };

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
              <AvatarImage src={postEntity.user?.avatar || ''} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center w-9 h-[55%]">
              <div className="w-[1px] h-full bg-black-quartz-12 mt-2 mb-2" />
            </div>
          </div>
          <div className="col-start-2 row-start-1 flex h-[21px]">
            <div className="flex gap-1 items-center">
              <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-base font-semibold">
                {postEntity.user?.username}
              </span>
              <span className="max-w-full text-grey-3 text-sm-1.5">
                {timeAgo(postEntity.createdAt)}
              </span>
            </div>
          </div>
          <div className="col-start-2 row-span-1">
            <div className="flex-1 cursor-text flex items-center">
              {postEntity.content}
            </div>
          </div>
          <div className="row-start-3 row-span-2 col-start-1 pt-1">
            <Avatar className="h-9 w-9">
              <AvatarImage src={userInfo?.avatar || ''} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="col-start-2 row-start-3 flex h-[21px]">
            <div className="flex gap-1">
              <span className="text-ellipsis whitespace-nowrap overflow-hidden max-w-full text-base font-semibold">
                {userInfo?.username}
              </span>
            </div>
          </div>
          <div className="col-start-2 row-span-2">
            <div className="flex-1 cursor-text flex items-center">
              <Textarea
                placeholder={`Trả lời ${postEntity.user?.username}...`}
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
                Post
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateForm;
