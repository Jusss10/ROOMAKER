export type Unit = number; // in centimeters

export interface PanelPreset {
    place: "left" | "right" | "top" | "bottom" | "back" ;
    width: Unit;
    height: Unit;
    thickness: Unit;
}

export interface CabinetPreset {
    name: string;
    width: Unit;
    height: Unit;
    depth: Unit;
}