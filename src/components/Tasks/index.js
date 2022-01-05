import React from 'react';
import axios from 'axios';

import AddTaskForm from './AddTaskForm';

import editSvg from '../../assets/img/edit.svg'

import './Tasks.scss';

function Tasks({ list, onEditTitle, onAddTask }) {

	const editTitle = () => {
		const newTitle = window.prompt('Хотите изменить имя папки?', `${list.name}`);
		if (newTitle) {
			onEditTitle(list.id, newTitle);
			axios.patch('http://localhost:3001/lists/' + list.id, {
				name: newTitle,
			}).catch(() => {
				alert('Не удалось изменить название списка!');
			});
		}
	};

	return (
		<div className="tasks">
			<div className='tasks__title'>
				<div onClick={editTitle} className="tasks__edit">
					<img src={editSvg} alt="" />
				</div>
				<h2>{list.name}</h2>
			</div>
			{!list.tasks.length && <div className="h3">Задачи отсутвуют</div>}
			<ul className="tasks__list">
				{
					list.tasks.map((el) => {
						return (
							<li key={el.id} className="tasks__item">
								{/* TODO  добавить функцию onChange для инпутов*/}
								<label className="checkbox">
									<input className="checkbox__input" type="checkbox" checked={el.completed} />
									<div className="checkbox__circle"></div>
								</label>
								<input className='tasks__text' readOnly value={el.text} />
							</li>
						);
					})
				}
			</ul>
			<AddTaskForm list={list} onAddTask={onAddTask} />
		</div>
	)
}

export default Tasks;
