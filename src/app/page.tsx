import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {/* <UserButton afterSignOutUrl="/" /> */}

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPosts = await api.post.getAllPosts.query();

  return (
    <div className="w-full max-w-xs flex flex-col overflow-auto">
      {latestPosts ? (
        latestPosts.map((post, idx) => {
          return <p key={idx}>{post.name}</p>
        })
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
