type BottomPanelProps = {
	width: number;
	depth: number;
	thickness: number;
};


export function BottomPanel({ width, depth, thickness }: BottomPanelProps) {
	return (
		<mesh>
			<boxGeometry args={[width, thickness, depth]} />
			<meshStandardMaterial color="#c9a27c" />
		</mesh>
	);
}