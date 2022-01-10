export interface Post{
    id:number;
    userName: string;
    image: string;
    userImage: string;
    description: string;
    datePosted: string | null;
    location: string;
    likesAmount: number;
}