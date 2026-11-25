
export interface Part{
    id: number;
    name: string;
    category: string;
    brand: string;
    price: number;
    inStock: boolean;
    location: CarLocation[];
    compatibleCars: string[];
}

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