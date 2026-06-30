import { cookies } from "next/headers";
import { AdminLogin } from "./AdminLogin";
import { AdminDashboard } from "./AdminDashboard";

export const metadata = { title: "Admin — Dialsa", robots: "noindex" };

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("dialsa_admin")?.value === process.env.ADMIN_PASSWORD;

  return isAuth ? <AdminDashboard /> : <AdminLogin />;
}
