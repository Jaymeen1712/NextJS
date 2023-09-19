import type { Metadata } from "next";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return (
    <>
      <section>
        <h1>
          <Link href={"/"}>Back to home</Link>
        </h1>
        <br />
        {users.map((user) => (
          <>
            <p key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        ))}
      </section>
    </>
  );
}
