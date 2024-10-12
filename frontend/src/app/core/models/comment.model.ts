import { User } from "./user.model";

export interface Comment {
     id: number;
     body: string;
     createdAt: string;
     updatedAt: string;
     author: User;
}