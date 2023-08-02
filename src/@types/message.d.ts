export interface IMessage {
    id?: string;
    email: string;
    phone: string;
    message: string;
    read?: boolean;
}