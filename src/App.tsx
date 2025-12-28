import './App.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function App() {

  return (
		<div id="canvas-container">
			<Canvas>
				<mesh>
					<boxGeometry args={[2, 2, 2]} />
				</mesh>
				<OrbitControls />
			</Canvas>
		</div>
	);
}

export default App
