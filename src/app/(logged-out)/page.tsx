import { Button } from "@/shared/ui/button";
import { ComputerIcon } from 'lucide-react';
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center"><ComputerIcon size={50} className="text-pink-600" />Lorem, ipsum.</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href={'/login'}>
            Log in
          </Link>
        </Button>
        <small>or</small>
        <Button variant={"outline"} asChild>
          <Link href={'/sign-up'}>
            Sign in
          </Link>
        </Button>
      </div>
    </>
  );
}