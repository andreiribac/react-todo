import React from 'react';
import classNames from 'classnames';

import Badge from '../Badge'
import removeSvg from '../../assets/img/remove.svg'

import './List.scss'


function List({ items, isRemovable, onClick, onRemove }) {

	const removeList = (item) => {
		if (window.confirm('Вы действительно хотите удалить список?')) {
			onRemove(item.name);
		}
	}

	return (
		<ul onClick={onClick} className="list">
			{
				items.map(item => <li
					// className={item.active ? 'active' : ''} 
					className={classNames(
						item.className,
						{ 'active': item.active }
					)
					}
					key={`${item.name}${item.id}`}
				>
					{isRemovable &&
						<div
							className='list__remove'
							onClick={() => removeList(item)}
						>
							<img src={removeSvg} alt="Remove icon" />
						</div>
					}
					<span className="list__img">
						{item.color
							? <Badge color={item.color.name} />
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
