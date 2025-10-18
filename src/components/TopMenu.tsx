"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function TopMenu() {
  const { data: session } = useSession();

  return (

    <nav className="flex justify-between items-center p-4 shadow">
      <div className="flex space-x-4 text-black">
        {session ? (
          <button onClick={() => signOut()} className="text-red-500">
            Sign Out
          </button>
        ) : (
          <Link href="/api/auth/signin" className="text-indigo-600">
            Sign In
          </Link>
        )}
        <Link href="/mybooking">My Booking</Link>
      </div>
      <div className="flex space-x-4 text-black">
        <Link href="/">Home</Link>
        <Link href="/booking">Booking</Link>
        <Image src="/img/logo.png" alt="logo"  width={30} height={30}/>
      </div>
    </nav>
  );
}
