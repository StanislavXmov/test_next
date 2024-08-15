import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import Link from "next/link";
import { LightDarkToogle } from "@/shared/ui/light-dark-toggle";
import { cn } from "@/shared/ui/utils";

export default function MainMenu({ className }: {className?: string}) {
  return (
    <nav className={cn(className, "md:bg-muted overflow-auto p-4 flex-col")}>
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <div className="py-4 grow">
        <MenuItem href="/dashboard">
          My dashboard
        </MenuItem>
        <MenuItem href="/dashboard/teams">
          Teams
        </MenuItem>
        <MenuItem href="/dashboard/employees">
          Employees
        </MenuItem>
        <MenuItem href="/dashboard/account">
          Account
        </MenuItem>
        <MenuItem href="/dashboard/settings">
          Settings
        </MenuItem>
        <MenuItem href="/dashboard/form">
          Form
        </MenuItem>
      </div>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-primary">
            US
          </AvatarFallback>
        </Avatar>
        <Link href={'/'} className="hover:underline" >
          Logout
        </Link>
        <LightDarkToogle className="ml-auto" />
      </footer>
    </nav>
  );
}