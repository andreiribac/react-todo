import React from 'react';
import classNames from 'classnames';

import Badge from '../Badge'

import './List.scss'


function List({ items, isRemovable, onClick }) {
	return (
		<ul onClick={onClick} className="list">
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
							? <Badge color={item.color} />
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
