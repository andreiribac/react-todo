import React from 'react';

import editSvg from '../../assets/img/edit.svg'

import './Tasks.scss';

function Tasks({ }) {
	return (
		<div className="tasks">
			<div className='tasks__title'>
				<div className="tasks__edit">
					<img src={editSvg} alt="" />
				</div>
				<h2>Продажи</h2>
			</div>
			<ul className="tasks__list">
				<li className="tasks__item">
					<label className="checkbox">
						<input className="checkbox__input" type="checkbox"  />
						<div className="checkbox__circle"></div>
					</label>
					<input className='tasks__text' value={'Изучить JavaScript'}/>
				</li>
			</ul>
		</div>
	)
}

export default Tasks;
