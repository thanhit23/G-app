'use client';

import { ArrowLeft } from 'src/components/Icons';
import { Button } from 'src/components/ui/button';

interface HeaderProps {
  username?: string;
}

const Header = ({ username = 'clc._688' }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/40">
      <div className="flex items-center justify-between px-4 h-[53px]">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-white/10"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <span className="font-bold">{username}</span>
        <div className="w-5" />
      </div>
    </div>
  );
};

export default Header;
