export interface Job {
     slug: string;
     name: string;
     description: string;
     salary: number;
     company: string;
     images: string[];
     img: string;
     id_cat: string;
     favorited: boolean;
     favoritesCount: number;
}