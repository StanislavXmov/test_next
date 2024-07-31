"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/drawer";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";

type Props = {
  children?: React.ReactNode;
}

export default function DashboardLayout({children}: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
          <MenuTitle />
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onOpenChange={(open) => setMobileMenuOpen(open)}
            onClose={() => setMobileMenuOpen(false)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <DialogTitle className="hidden">
                DialogTitle
              </DialogTitle>
              <MainMenu />
              <DialogDescription className="hidden">
                DialogDescription
              </DialogDescription>
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Lorem ipsum dolor sit!</h1>
        {children}
      </div>
    </div>
  );
}