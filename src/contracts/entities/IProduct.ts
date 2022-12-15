export interface IProduct {
    id: number,

    ownerId: number,

    name: string,
    description: string
    price: number,

    createdAt: Date,
    // updatedAt?: Date,
    deletedAt?: Date,
}