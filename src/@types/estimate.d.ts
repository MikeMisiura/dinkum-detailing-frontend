export interface IEstimate {
    estimateId?: string;
    userId?: number;
    email?: string;
    phone: string;
    name: string;

    price: number;
    seats: number;
    leather: boolean;
    conditioner: boolean;
    pets: boolean;
    smoke: boolean;
}