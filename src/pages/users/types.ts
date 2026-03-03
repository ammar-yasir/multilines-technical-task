import type { BadgeVariants } from "../../components/Badge/Badge.types";

export type Role = 'admin' | 'moderator' | 'user' | string;

export interface User {
  id: string;
  name: string;
  department: string;
  email: string;
  birthDate: string;
  phone: string;
  role: Role;
}

export const ROLE_MAP: Record<Role, BadgeVariants> = {
  'admin': 'success',
  'moderator': 'pending',
  'user': 'draft',
};
