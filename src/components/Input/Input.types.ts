import React from "react";

export interface InputTypes {
    name: string; 
    label: string;
    handleChange:  React.Dispatch<React.SetStateAction<number>>;
    icon: string;
    value: number;
    showZeroLabel?: boolean;
}
export interface InputComponentType {
    isZero: boolean | undefined;
}