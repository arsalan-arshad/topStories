import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [stories, setStories] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:8000/topstories').then((res) => {
			setStories(res.data.result);
		});
	}, []);
	return (
		<div className='App'>
			<div className='card-section'>
				{stories.length !== 0 &&
					stories.map(
						(data, i) =>
							data?.title && (
								<a key={i} href={data?.url} target='_blank'>
									<div className='card'>
										<img
											src={data?.multimedia[0]?.url}
											alt='news'
											className='card-image'
										/>
										<br />
										<p>{data?.title}</p>
									</div>
								</a>
							)
					)}
			</div>
		</div>
	);
}

export default App;
