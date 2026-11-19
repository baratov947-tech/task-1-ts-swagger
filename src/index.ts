import type { Admin, User } from "./types/user";
import type { paths } from "../api";

const regularUser: User = {
    id: 1,
    name: "Alex",
    email: "alex@example.com",
    role: "user",
};

const adminUser: Admin = {
    id: 2,
    name: "Admin",
    email: "admin@example.com",
    role: "admin",
    permissions: ["users:read", "users:write"],
};

type GetUserResponse =
    paths["/users/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

const apiUser: GetUserResponse = regularUser;

console.log({ regularUser, adminUser, apiUser });