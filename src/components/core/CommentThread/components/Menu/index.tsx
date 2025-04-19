'use client';

import {
  CircleMenu,
  CloseOutline,
  Flag,
  Friends,
  LinkIcon,
  Ring,
  Save,
  StartAdd,
} from 'src/components/Icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <CircleMenu className="w-6 h-6 fill-grey-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[280px] p-0 space-y-0 bg-black-quartz-1 border-black-quartz-12"
      >
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent font-semibold">
          <StartAdd />
          <span>Add to feed</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent font-semibold">
          <Save />
          <span>Save</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent font-semibold">
          <CloseOutline />
          <span>{`Don't care`}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent font-semibold">
          <Ring />
          <span>Turn off notifications</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent text-red-500 font-semibold">
          <Friends />
          <span>Block</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent text-red-500 font-semibold">
          <Flag />
          <span>Report</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent border-t border-[#f3f5f726] font-semibold">
          <LinkIcon />
          <span>Copy link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
