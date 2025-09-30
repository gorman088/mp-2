export interface Character{
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    episode: string[];
}