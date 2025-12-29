import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// 1 unit = 1 cm


export default function Container() {
	return (
		<div id="canvas-container">
			<Canvas
				camera={{
					fov: 45,
					near: 1,
					far: 200,
					position: [3, 2, 6],
				}}>

				<gridHelper args={[300, 300]} />
				<OrbitControls />
			</Canvas>
		</div>
	);
}
