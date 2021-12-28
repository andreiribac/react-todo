import React from 'react';

import './List.scss'

import listSvg from '../../assets/img/list.svg';

function List({ items }) {
	return (
		<ul className="list">
			{
				items.map(item => <li
					className={item.active ? 'active' : ''} 
					key={item.name}
				>
					<span className="list__img">
						{item.color
							? <i className={`badge badge--${item.color}`}></i>
							: <img src={listSvg} alt="List icon" />
						}
					</span>
					<span className="list__text">
						{item.name}
					</span>
				</li>)
			}

		</ul>
	)
}

export default List
