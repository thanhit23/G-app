'use client';

import React from 'react';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import {
  Create,
  Home,
  Logo,
  Menu,
  Notification,
  Profile,
  Search,
} from 'src/components/Icons';
import { Button } from 'src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';
import FormCreatePost from 'src/containers/Home/components/CreatePost/FormCreatePost';
import { cn } from 'src/lib/utils';
import Storage from 'src/utils/storage';

const SideBar = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  const router = useRouter();

  const userInfo = Storage.getUserInfo();

  return (
    <div className="w-[76px] fixed top-0 left-0 bottom-0 flex justify-between items-center flex-col py-5">
      <div className="px-4">
        <Logo />
      </div>
      <div className="px-4 flex flex-col items-center justify-center">
        <Link href="/" className={cn('p-4 cursor-pointer')}>
          <Home
            className={cn('text-grey-1', {
              'fill-white text-white': pathname === '/',
            })}
          />
        </Link>
        <Link href="/search" className={cn('p-4 cursor-pointer')}>
          <Search
            className={cn('text-grey-1', {
              'text-white': pathname === '/search',
            })}
          />
        </Link>
        <Dialog open={open} onOpenChange={userInfo ? setOpen : () => {}}>
          <DialogTrigger
            className="flex-1"
            onClick={() => {
              if (!userInfo) {
                router.push('/login');
              }
            }}
          >
            <div className="p-4 w-[54px] h-[54px] cursor-pointer">
              <Create
                className={cn('text-grey-1', {
                  'text-white': pathname === '/create',
                })}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="border-[#f3f5f726] p-0 max-w-[620px] gap-0 rounded-3xl">
            <DialogTitle className="hidden" />
            <FormCreatePost onToggle={setOpen} />
          </DialogContent>
        </Dialog>
        <Link
          href={userInfo ? '/notification' : '/login'}
          className={cn('p-4 cursor-pointer')}
        >
          <Notification
            className={cn('text-grey-1', {
              'fill-white text-white': pathname === '/notification',
            })}
          />
        </Link>
        <Link
          href={userInfo ? '/profile' : '/login'}
          className={cn('p-4 cursor-pointer')}
        >
          <Profile
            className={cn('text-grey-1', {
              'fill-white text-white': pathname === '/profile',
            })}
          />
        </Link>
      </div>
      <div className="px-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="focus-visible:ring-none">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-sm-1.5 active:bg-primary-foreground rounded-none"
            >
              Switch appearance
            </DropdownMenuItem>
            <DropdownMenuSeparator className="h-[1.2px] my-0" />
            <DropdownMenuItem className="focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-sm-1.5  active:bg-primary-foreground  rounded-none">
              About
            </DropdownMenuItem>
            <DropdownMenuSeparator className=" h-[1.2px] my-0" />
            <DropdownMenuItem className="focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-sm-1.5 active:bg-primary-foreground rounded-none">
              Report a problem
            </DropdownMenuItem>
            <DropdownMenuSeparator className="h-[1.2px] my-0" />
            <DropdownMenuItem className="focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-sm-1.5  active:bg-primary-foreground rounded-none">
              <div
                aria-label="Log out"
                onClick={() => {
                  Storage.removeItem('ACCESS_TOKEN');
                  Storage.removeItem('USER_INFO');
                  router.push('/login');
                }}
              >
                Log out
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SideBar;
