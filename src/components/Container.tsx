import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sidebar from "./Sidebar";
import { BottomPanel } from "./AddCabinet";
// 1 unit = 1 m

export default function Container() {
	const [hasCabinet, setHasCabinet] = useState(false);
	return (
		<>
			<Sidebar onAddCabinet={() => setHasCabinet(true)} />
			<div id="canvas-container">
				<Canvas
					camera={{
						fov: 45,
						near: 0.1,
						far: 200,
						position: [0, 2, 2],
					}}>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} />
					<gridHelper args={[10, 100]} />
					<OrbitControls />
					{hasCabinet && (<BottomPanel width={1.2} depth={0.6} thickness={0.018} />)}
				</Canvas>
			</div>
		</>
	);
}
