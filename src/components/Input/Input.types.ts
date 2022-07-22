import React from "react";

export interface InputTypes {
    name: string; 
    label: string;
    dispatcher:  React.Dispatch<React.SetStateAction<{bill: number, tip: number, numberOfPeople: number}>>;
    ref: React.MutableRefObject<HTMLInputElement | HTMLButtonElement | null>;
    isZero?: boolean;
    icon: string;
}
export interface InputComponentType {
    isZero: boolean | undefined;
}