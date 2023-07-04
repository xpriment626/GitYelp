export interface IRepository {
    id: string;
    fullName: string;
    description: string;
    language: string;
    forksCount: number;
    stargazersCount: number;
    ratingAverage: number;
    reviewCount: number;
    ownerAvatarUrl: string;
}

export interface IRepoItem {
    id?: string;
    fullName: string;
    description: string;
    language: string;
    stargazersCount: number;
    forksCount: number;
    reviewCount: number;
    ratingAverage: number;
    ownerAvatarUrl?: string;
}