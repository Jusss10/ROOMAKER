type Props = {
  onAddCabinet: () => void;
};

export default function Sidebar({ onAddCabinet }: Props) {
	return (
		<aside className="sidebar">
			<h3>Tools</h3>
			<button type="button" onClick={onAddCabinet}>
				Add DEF cabinet
			</button>
		</aside>
	);
}
