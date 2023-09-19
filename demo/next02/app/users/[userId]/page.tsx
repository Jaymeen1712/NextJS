import getUser from "@/app/lib/getUser";
import getUserPosts from "@/app/lib/getUserPosts";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function User({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;

  return (
    <>
      <section>
        <div>{user.name}</div>
        <br />
        <hr />
        <br />
        <Suspense fallback={<h2>Loading...</h2>}>
          <UserPosts promise={userPostsData} />
        </Suspense>
      </section>
    </>
  );
}
