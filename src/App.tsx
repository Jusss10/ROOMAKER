import './App.css'
import { Leva } from 'leva';
import Container from './components/Container';



function App() {

	return (
		<div id="app-shell">
			<Leva collapsed={true} />
			<Container />
		</div>
	);
}

export default App
