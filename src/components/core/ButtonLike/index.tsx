'use client';

import { useEffect, useState } from 'react';

import NumberFlow from '@number-flow/react';

import { Like } from 'src/components/Icons';
import { Button } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';
import { useLike, useUnlike } from 'src/queries/like';

interface Props {
  entity: {
    id: string;
    totalLikes: number;
    isLiked: boolean;
  };
  name: 'postId' | 'commentId';
}

const ButtonLike: React.FC<Props> = ({ entity, name }) => {
  const [value, setValue] = useState<number | null>(null);

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const { mutate: mutateLike } = useLike();

  const { mutate: mutateUnLike } = useUnlike();

  useEffect(() => {
    if (entity && value === null) {
      setValue(entity.totalLikes || 0);
      setIsLiked(entity.isLiked || false);
    }
  }, [entity, value]);

  return (
    <Button
      variant="ghost"
      className="min-w-9 h-9"
      onClick={(e) => {
        e.stopPropagation();
        if (!isLiked) {
          mutateLike({ [name]: entity.id });
          setValue((value || 0) + 1);
          setIsLiked(true);
          return null;
        }

        mutateUnLike({ [name]: entity.id });
        setIsLiked(false);
        setValue((value || 0) - 1);
      }}
    >
      <Like
        className={cn('!w-5 !h-5 fill-transparent stroke-current', {
          'fill-[#ff0000] text-[#ff0000]': isLiked,
        })}
      />

      <NumberFlow
        value={value}
        className={cn({ 'text-[#ff0000]': isLiked })}
        format={{ notation: 'compact' }}
      />
    </Button>
  );
};

export default ButtonLike;
