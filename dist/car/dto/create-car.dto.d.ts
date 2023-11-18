export declare enum Transmission {
    MANUAL = "MANUAL",
    AUTOMATIC = "AUTOMATIC"
}
export declare class CreateCarDto {
    readonly brand: string;
    readonly model: string;
    readonly productionYear: number;
    readonly power: number;
    readonly capacity: number;
    readonly transmission = Transmission.MANUAL;
    readonly numberOfSeats: number;
    readonly costPerDay: number;
    readonly registrationNumber: string;
    readonly photo?: any;
}
