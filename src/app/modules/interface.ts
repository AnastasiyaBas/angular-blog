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

export interface  Albums {
    userId: number;
    title: string;
}

export interface Todos {
    userId: number;
    title: string;
    completed: boolean;
    id: number;
}
export interface Photos {
    id: number;
    url: string;
}


