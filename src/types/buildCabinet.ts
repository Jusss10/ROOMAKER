import type { CabinetPreset, PanelPreset, Unit } from "./cabinetPreset";

export function buildCabinet(param: CabinetPreset): PanelPreset[] {
    const { width, depth, thickness } = param;
    const panel = (id: PanelPreset["id"], w: Unit, d: Unit, t: Unit): PanelPreset => ({
			id,
			width: w,
			depth: d,
            thickness: t,
		});
        const panels: PanelPreset[] = [];
        panels.push(panel("bottom", width, depth, thickness));
    
    
    
        return panels;
}