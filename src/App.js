import React, { useEffect } from 'react';
// import listSvg from './assets/img/list.svg'

import List from './components/List';

function App() {
	useEffect(() => {
		document.title = "React ToDo";
	});

	return (
		<div className='todo'>
			<div className="todo__sidebar">
				<List items={[
					{
						color: null,
						name: "Все задачи",
						active: true,
					},
					{
						color: "green",
						name: "Покупки",
						active: false,
					},
					{
						color: "blue",
						name: "Фронтенд",
						active: false,
					},
					{
						color: "pink",
						name: "Фильмы и сериа...",
						active: false,
					},
					{
						color: "mint",
						name: "Книги",
						active: false,
					},
					{
						color: "gray",
						name: "Личное",
						active: false,
					},
					
				]} />
			</div>
			<div className="todo__tasks">

			</div>
		</div>
	);
}

export default App;
