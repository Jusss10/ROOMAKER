export type Unit = number; // in centimeters

export interface PanelPreset {
    id: "left" | "right" | "top" | "bottom" | "back" ;
    width: Unit;
    depth: Unit;
    thickness: Unit;
}

export interface CabinetPreset {
    width: Unit;
    depth: Unit;
    thickness: Unit;
}