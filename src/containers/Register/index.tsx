'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import * as z from 'zod';

import BlurText from 'src/components/Animation/BlurText';
import SquaresBackground from 'src/components/Animation/SquaresBackground';
import { Button } from 'src/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from 'src/components/ui/form';
import { Input } from 'src/components/ui/input';
import { useSignUp } from 'src/queries';

const registerSchema = z.object({
  email: z
    .string()
    .min(1, 'Vui lòng nhập tên người dùng, số điện thoại hoặc email'),
  password: z
    .string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])/,
      'Mật khẩu phải chứa ít nhất 1 số, 1 ký tự đặc biệt và 1 chữ in hoa',
    ),
  username: z.string().min(1, 'Vui lòng nhập tên người dùng'),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  const { mutate: signUp, isPending } = useSignUp({
    onError(error: any) {
      if (error?.response?.data?.message) {
        form.setError(error?.response?.data.type, {
          message: error.response.data.message,
          type: 'manual',
        });
      }
    },
  });

  const onSubmit = (data: RegisterFormValues) => signUp(data);

  const renderBlurText = useMemo(
    () => (
      <BlurText
        text="Đăng ký tài khoản"
        className="justify-center text-md font-bold mb-2"
      />
    ),
    [],
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SquaresBackground className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-[370px] space-y-8 p-8 rounded-3xl bg-black-quartz-1 border border-solid border-grey-2">
          {renderBlurText}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Vui lòng nhập tên người dùng"
                        className="bg-[#16181c] border-none h-12 text-white placeholder:text-gray-500"
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Vui lòng nhập email"
                        className="bg-[#16181c] border-none h-12 text-white placeholder:text-gray-500"
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Vui lòng nhập mật khẩu"
                        className="bg-[#16181c] border-none h-12 text-white placeholder:text-gray-500"
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 h-12 font-semibold"
                disabled={isPending}
              >
                {isPending ? <Loader2 className="animate-spin" /> : 'Đăng ký'}
              </Button>
            </form>
          </Form>

          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-grey-3 hover:text-white"
            >
              Bạn quên mật khẩu ư?
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">hoặc</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full h-12 bg-transparent border border-grey-2 hover:bg-[#16181c] space-x-2"
            disabled={isPending}
            onClick={() => console.log('Instagram login')}
          >
            <Image
              src="/instagram-logo.png"
              alt="Instagram"
              width={34}
              height={34}
            />
            <span>Tiếp tục bằng Instagram</span>
            <span className="ml-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </Button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span>© 2025</span>
            <Link href="/terms" className="hover:text-gray-400">
              Điều khoản của Threads
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Chính sách quyền riêng tư
            </Link>
            <Link href="/cookies" className="hover:text-gray-400">
              Chính sách cookie
            </Link>
            <Link href="/report" className="hover:text-gray-400">
              Báo cáo sự cố
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
