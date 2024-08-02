"use client";

import { Button } from "@/shared/ui/button";
import { useUser } from "@/store/userStore";

export default function AccountPage() {
  const user = useUser(s => s.user);
  const setUser = useUser(s => s.setUser);
  return (
    <div>
      <div>
        AccountPage by {user}
      </div>
      <div>
        <Button onClick={() => setUser(new Date().getTime().toString())}>
          Set User
        </Button>
      </div>
    </div>
  );
}