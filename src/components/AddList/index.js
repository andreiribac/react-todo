import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import axios from 'axios';

import List from '../List';
import Badge from '../Badge';

import closeSvg from '../../assets/img/close.svg'

import './AddList.scss';

function AddList({ colors, onAddList }) {

	const [visiblePopup, setVisiblePopup] = useState(false);
	const [selectedColor, setSelectedColor] = useState(3);
	const [isLoading, setIsLoading] = useState(false);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		if (Array.isArray(colors)) {
			setSelectedColor(colors[0].id);
		}
	}, [colors]);

	const onClose = () => {
		setVisiblePopup(false);
		setInputValue('');
		setSelectedColor(colors[0].id);
	};

	const addNewList = () => {
		if (!inputValue) {
			alert('Введите название списка');
			return;
		}
		setIsLoading(true);
		axios
			.post('http://localhost:3001/lists', {
				name: inputValue,
				colorId: selectedColor
			})
			.then(({ data }) => {
				const color = colors.filter(c => c.id === selectedColor)[0].name;
				const listObj = { ...data, color: { name: color } };
				onAddList(listObj);
				onClose();
			})
			.finally(() => {
				setIsLoading(false);
			});
		// let newID = Math.floor(Math.random() * 100);
		// const color = colors.filter(c => c.id === selectedColor)[0].name;
		// const colorID = colors.filter(c => c.id === selectedColor)[0].id;
		// let newList = { "id": newID, "name": inputValue, "colorId": colorID, "color": color, };
		// onAddList(newList);
		// onClose();
	}


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
					<div onClick={onClose} className="add-list__popup-close-btn">
						<img src={closeSvg} alt="" />
					</div>
					<label className='field'>
						<input
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							className='field__input'
							placeholder='Название папки'
							type="text" />
					</label>
					<div className='add-list__popup-colors'>
						{colors.map(color => <Badge
							key={color.id}
							onClick={() => setSelectedColor(color.id)}
							className={classNames({ 'badge--big': true }, { 'active': color.id === selectedColor })}
							color={color.name}
						/>)}
					</div>
					<button onClick={addNewList} className='btn btn--w100'>Добавить</button>
				</div>
			}

		</div>
	)
}

export default AddList
