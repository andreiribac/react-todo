import React from 'react';

import editSvg from '../../assets/img/edit.svg'

import './Tasks.scss';

function Tasks({ list }) {
	return (
		<div className="tasks">
			<div className='tasks__title'>
				<div className="tasks__edit">
					<img src={editSvg} alt="" />
				</div>
				<h2>{list.name}</h2>
			</div>
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
		</div>
	)
}

export default Tasks;
