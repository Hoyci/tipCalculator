import React from "react";

export interface InputTypes {
    name: string; 
    label: string;
    handleChange:  React.Dispatch<React.SetStateAction<string>>;
    icon: string;
    value: string;
    showZeroLabel?: boolean;
}
export interface InputComponentType {
    isZero: boolean | undefined;
}