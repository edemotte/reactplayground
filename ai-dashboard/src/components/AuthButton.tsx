"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <p>Welcome, {session.user?.name}</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        );
    }
    return <button onClick={() => signIn("google")}>Sign In with Google</button>;
}
