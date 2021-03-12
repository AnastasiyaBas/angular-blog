export interface Posts {
    userId: number;
    title: string;
    body: string;
    id?: number;
}
export interface Comments {
    id: number;
    postId: number;
    name: string;
    body: string;
}
export interface Users {
    id: number;
    name: string;
    website: string;
    email: string;
    city?: string;
}
