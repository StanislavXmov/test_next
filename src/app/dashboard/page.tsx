import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import EmployessStats from "./components/employees/employees-stats";
import TeamsStats from "./components/teams/teams-stats";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">
          Employess stats
        </TabsTrigger>
        <TabsTrigger value="teams">
          Teams stats
        </TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployessStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
}