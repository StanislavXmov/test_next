"use client";

import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { PasswordInput } from '@/shared/ui/password-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComputerIcon } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('handleSubmit', values.email, values.password);
    
  }

  return (
    <>
      <ComputerIcon size={50} />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>
            Login
          </CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField control={form.control} name='email' render={({field}) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Email..." {...field} />
                  </FormControl>
                  <FormDescription>
                    <small>
                      Lorem ipsum dolor sit amet.
                    </small>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name='password' render={({field}) => (
                <FormItem>
                  <FormLabel>
                    Password
                  </FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Password..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type='submit'>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className='justify-between'>
          <small>Don't have an account?</small>
          <Button asChild variant={'outline'} size={'sm'}>
            <Link href={'/sign-up'}>
              Sign up
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}