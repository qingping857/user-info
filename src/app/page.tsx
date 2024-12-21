import { UserForm } from "@/components/forms/user-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">用户信息收集</h1>
        <div className="w-full flex justify-end">
          <Button asChild>
            <Link href="/users">查看用户列表</Link>
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <UserForm />
        </div>
      </div>
    </main>
  );
}
