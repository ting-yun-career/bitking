import { getServerSession } from "next-auth";
import DashBoard from "./dashboard/page";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/signIn");
  }
  return (
    <main>
      <DashBoard />
    </main>
  );
}
