
import { DefaultSession } from "next-auth";

// Extend the Session and JWT types
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: string;
        } & DefaultSession["user"];
    }

    interface JWT {
        id: string;
        role: string;
    }
}
