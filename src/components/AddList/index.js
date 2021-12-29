import React, { useState } from 'react';
import classNames from 'classnames';

import List from '../List';
import Badge from '../Badge';

import closeSvg from '../../assets/img/close.svg'

import './AddList.scss';

function AddList({colors}) {

	const [visiblePopup, setVisiblePopup] = useState(true);
	const [selectedColor, setSelectedColor] = useState(colors[0].id);
	console.log('selectedColor: ', selectedColor);

	return (
		<div className='add-list'>
			<List
				onClick={() => setVisiblePopup(true)}
				items={[
					{
						color: null,
						name: "Добавить папку",
						active: false,
						icon: (<svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 1V15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M1 8H15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>),
						className: "list__add-btn",
					},
				]}
			/>
			{visiblePopup &&
				<div className="add-list__popup">
					<div onClick={() => setVisiblePopup(false)} className="add-list__popup-close-btn">
						<img src={closeSvg} alt="" />
					</div>
					<label className='field'>
						<input className='field__input' placeholder='Название папки' type="text" />
					</label>
					<div className='add-list__popup-colors'>
						{colors.map(color => <Badge
							key={color.id}
							onClick={() => setSelectedColor(color.id)}
							className={classNames('badge--big', { 'active': color.id === selectedColor})}
							color={color.name}
						/>)}
					</div>
					<button className='btn btn--w100'>Добавить</button>
				</div>
			}

		</div>
	)
}

export default AddList
