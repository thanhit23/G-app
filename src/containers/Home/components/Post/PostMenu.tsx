"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu"
import { CircleMenu } from "src/components/Icons"

const PostMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <CircleMenu className="w-6 h-6 fill-grey-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[280px] p-0 space-y-0 bg-black-quartz-1 border-black-quartz-12">
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
          <span>Thêm vào bảng feed</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z" fill="currentColor" />
          </svg>
          <span>Lưu</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="currentColor" />
          </svg>
          <span>Không quan tâm</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" fill="currentColor" />
          </svg>
          <span>Tắt thông báo</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent text-red-500 font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor" />
          </svg>
          <span>Chặn</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent text-red-500 font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z" fill="currentColor" />
          </svg>
          <span>Báo cáo</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-accent border-t border-[#f3f5f726] font-semibold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM8 11H16V13H8V11Z" fill="currentColor" />
          </svg>
          <span>Sao chép liên kết</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default PostMenu;
