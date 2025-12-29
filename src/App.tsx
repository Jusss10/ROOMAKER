import './App.css'
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import { Leva } from 'leva';
import { useState } from 'react';



function App() {
	const [cabinets, setCabinets] = useState<Array<{ width: number; height: number; depth: number }>>([]);

	const handleAddCabinet = () => {
		// MVP: add a default cabinet; later wire to presets/forms
		setCabinets(prev => [...prev, { width: 60, height: 80, depth: 40 }]);
	};

	return (
		<div id="app-shell">
			<Sidebar onAddCabinet={handleAddCabinet} />
			<div className="stage">
				<Leva collapsed />
				<Container cabinets={cabinets} />
			</div>
		</div>
	);
}

export default App
