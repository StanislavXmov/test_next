"use client"

import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: "alpha" | "canary" | "delta";
  isTeamLeader: boolean;
  avatar?: string;
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "avatar",
    header: "",
    cell: ({row}) => {
      const avatar: string = row.getValue('avatar');
      const firstName: string = row.getValue('firstName');
      const lastName: string = row.getValue('lastName');
      
      return (
        <Avatar>
          {!!avatar && <Image height={40} width={40} src={'/user.png'} alt={`${firstName} ${lastName} avatar`} />}
          <AvatarFallback>
          {firstName[0]}{lastName[0]}
          </AvatarFallback>
        </Avatar>
      )
    }
  },
  {
    accessorKey: "firstName",
    header: "First name",
  },
  {
    accessorKey: "lastName",
    header: "Last name",
  },
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "isTeamLeader",
    header: "",
    cell: ({row}) => {
      const isTeamLeader: boolean = row.getValue('isTeamLeader');

      return isTeamLeader ? <Badge variant={"success"} >Team leader</Badge> : null;
    }
  },
]
