import React, { useState } from 'react';
import axios from 'axios';

import addSvg from '../../assets/img/add.svg';

import './Tasks.scss';
// TODO 1.14.09 https://www.youtube.com/watch?v=6NuzPai9GqQ&list=PL0FGkDGJQjJGBcY_b625HqAKL4i5iNZGs&index=5
function AddTaskForm({ list, onAddTask }) {

	const [visibleForm, setVisibleForm] = useState(false);
	const [inputValue, setInputValue] = useState('');

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
		onAddTask(list.id, obj)
		setVisibleForm(!visibleForm);
		setInputValue('');
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
								onClick={addTask}
								className='btn'>
								Добавить задачу
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
