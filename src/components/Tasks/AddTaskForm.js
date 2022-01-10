import React, { useState } from 'react';
import axios from 'axios';

import addSvg from '../../assets/img/add.svg';

import './Tasks.scss';
function AddTaskForm({ list, onAddTask }) {

	const [visibleForm, setVisibleForm] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const toggleFormVisible = () => {
		setVisibleForm(!visibleForm);
		setInputValue('');
	}

	const addTask = () => {
		const obj = {
			"listId": list.id,
			"text": inputValue,
			"completed": false
		};
		setIsLoading(true);
		axios.post('http://localhost:3001/tasks', obj).then(({ data }) => {

			onAddTask(list.id, data)
			toggleFormVisible();
		})
			.catch(() => {
				alert('Ошибка при добавлении задачи!')
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	return (
		<div className="tasks__form">
			{
				visibleForm ? (
					<div className="tasks__form-block">
						<label className='field'>
							<input
								value={inputValue}
								onChange={e => setInputValue(e.target.value)}
								className='field__input'
								placeholder='Текст задачи'
								type="text" />
						</label>
						<div className="tasks__form-btn-box">
							<button
								disabled={isLoading}
								onClick={addTask}
								className='btn'>
								{isLoading ? 'Добавление...' : 'Добавить задачу'}
							</button>
							<button
								onClick={toggleFormVisible}
								className='btn btn--gray'>
								Отмена
							</button>
						</div>
					</div>
				) : (
					<div
						onClick={toggleFormVisible}
						className="tasks__form-new"
					>
						<img src={addSvg} alt="" />
						<span>Новая задача</span>
					</div>
				)
			}
		</div>
	)
}

export default AddTaskForm;
