export type Role = "admin" | "user";

export interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
    avatarUrl?: string;
}

export interface Admin extends User {
    role: "admin";
    permissions: string[];
}