import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import AddTaskForm from './AddTaskForm';
import Task from './Task';

import editSvg from '../../assets/img/edit.svg'

import './Tasks.scss';

function Tasks({ list, onEditTitle, onAddTask, withoutEmpty, onRemoveTask, onEditTask, onCompleteTask }) {

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
				<Link to={`/lists/${list.id}`}>
					<h2 style={{ color: list.color.hex }}>{list.name}</h2>
				</Link>
				
			</div>
			{!withoutEmpty && list.tasks && !list.tasks.length && <div className="h3">Задачи отсутвуют</div>}
			<ul className="tasks__list">
				{
					list.tasks && list.tasks.map((task) => {
						return (
							<Task
								key={task.id}
								list={list}
								onEdit={onEditTask}
								onRemove={onRemoveTask}
								onComplete={onCompleteTask}
								{...task}
							/>
						);
					})
				}
			</ul>
			<AddTaskForm key={list.id} list={list} onAddTask={onAddTask} />
		</div>
	)
}

export default Tasks;
