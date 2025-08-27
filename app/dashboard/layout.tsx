import { PlanProvider } from "@/lib/contexts/PlanContext";
import { auth } from "@clerk/nextjs/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { has } = await auth();
  const hasProPlan = true;
  const hasEnterprisePlan = has({ plan: "enterprise_user" });

  return (
    <PlanProvider hasProPlan={hasProPlan} hasEnterprisePlan={hasEnterprisePlan}>
      {children}
    </PlanProvider>
  );
}

