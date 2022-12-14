export interface IProduct {
    id: number,

    ownerId: number,

    value: number,
    name: string,
    description: string

    createdAt: Date,
    updatedAt?: Date,
    deletedAt?: Date,
}