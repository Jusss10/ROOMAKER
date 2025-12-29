
//when i click a button a cabint should apper with all things 
//added first default and then with wat i changed

export function AddCabinet() {
    return (null);
}

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