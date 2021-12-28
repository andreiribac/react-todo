import React from 'react';
import classNames from 'classnames';

import './List.scss'

import listSvg from '../../assets/img/list.svg';

function List({ items, isRemovable }) {
	return (
		<ul className="list">
			{
				items.map(item => <li
					// className={item.active ? 'active' : ''} 
					className={classNames(
						item.className,
						{'active': item.active}
						)
					}
					key={item.name}
				>
					<span className="list__img">
						{item.color
							? <i className={`badge badge--${item.color}`}></i>
							: item.icon
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
