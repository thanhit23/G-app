'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import * as z from 'zod';

import BlurText from 'src/components/core/Animation/BlurText';
import SquaresBackground from 'src/components/core/Animation/SquaresBackground';
import { ArrowRight } from 'src/components/Icons';
import { Button } from 'src/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from 'src/components/ui/form';
import { Input } from 'src/components/ui/input';
import { useSignIn } from 'src/queries';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your username, phone number, or email.'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])/,
      'Password must contain at least 1 number, 1 special character, and 1 uppercase letter.',
    ),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate: signIn, isPending } = useSignIn({
    onError(error: any) {
      if (error?.response?.data?.message) {
        form.setError('email', {
          message: error.response.data.message,
          type: 'manual',
        });
      }
    },
  });

  const onSubmit = (data: LoginFormValues) => signIn(data);

  const renderBlurText = useMemo(
    () => (
      <BlurText
        text="Đăng nhập bằng tài khoản"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Username, phone number, or email."
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
                        placeholder="Password"
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
                {isPending ? <Loader2 className="animate-spin" /> : 'Login'}
              </Button>
            </form>
          </Form>

          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-grey-3 hover:text-white"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">or</span>
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
            <span>Continue with Instagram</span>
            <span className="ml-auto">
              <ArrowRight />
            </span>
          </Button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span>© 2025</span>
            <Link href="/terms" className="hover:text-gray-400">
              Terms of Threads.
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy.
            </Link>
            <Link href="/cookies" className="hover:text-gray-400">
              Cookie Policy.
            </Link>
            <Link href="/report" className="hover:text-gray-400">
              Report an incident
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
