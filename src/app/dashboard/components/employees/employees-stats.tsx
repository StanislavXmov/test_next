import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { AlertTriangleIcon, BadgeCheckIcon, LaptopIcon, PartyPopperIcon, UserCheck2Icon, UserIcon, UserRoundXIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import UserImage from '../../../../../public/user.png';
import WorkLocationTrends from "./work-location-trends";

export default function EmployessStats() {
  // test data
  const totalEmployees = 100;
  const employeesPresent = 86;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">
              Total employess
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button size={"xs"} asChild>
                <Link href={'/dashboard/employees'}>
                  View all
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">
              Employess present
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              {employeesPresentPercentage > 75 ? <UserCheck2Icon /> : <UserRoundXIcon />}
              <div className="text-5xl font-bold">{employeesPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercentage > 75 ? (
              <span className="flex gap-1 items-center text-xs text-green-500">
                <BadgeCheckIcon />
                {employeesPresentPercentage}% of employees as present
              </span>
            ) : (
              <span className="flex gap-1 items-center text-xs text-red-500">
                <AlertTriangleIcon />
                Only {employeesPresentPercentage}% of employees as present
              </span>
            )}
            
          </CardFooter>
        </Card>
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">
              Employess of the month
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image className="bg-zinc-200" src={UserImage} alt="User image" />
              <AvatarFallback>
                US
              </AvatarFallback>
            </Avatar>
            <span className="text-2xl">Lorem, ipsum.</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-pink-500" />
            <span>Lorem, ipsum dolor.</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <LaptopIcon />
            <span>Lorem, ipsum dolor.</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}