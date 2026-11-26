
//Template for every part object we create
export interface Part{
    id: number;
    name: string;
    category: string;
    brand: string;
    price: number;
    inStock: boolean;
    location: CarLocation[];
    compatibleCars: string[];
    partNumber?: string;
}
//Camera angles
export type CarLocation = 
'leftRearTire'|
'rightRearTire'|
'leftFrontTire'|
'rightFrontTire'|
'hood'|
'roof'|
'frontLeftLight'|
'frontRightLight'|
'rearLeftLight'|
'rearRightLight'|
'interior'|
'underbody';