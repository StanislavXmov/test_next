"use client";

import { Button } from "@/shared/ui/button";
import { getUser } from "./actions";
import { useUser } from "@/store/userStore";

export default function SettingsPage() {
  const setUser = useUser(s => s.setUser);

  const get = async () => {
    const user = await getUser();
    console.log(user);
    setUser(user);
  }

  return (
    <div>
      <div>
        SettingsPage
      </div>
      
      <Button onClick={get}>
        Get user
      </Button>
    </div>
  );
}