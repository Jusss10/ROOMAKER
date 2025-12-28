import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
// 1unit = 1cm

export default function Container() {
    const controls = useControls({ position: -2 });
     console.log(controls.position)
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
