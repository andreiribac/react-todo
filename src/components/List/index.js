import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

import Badge from '../Badge';

import removeSvg from '../../assets/img/remove.svg';

import './List.scss';


function List({ items, isRemovable, onClick, onRemove, onClickItem, activeItem }) {

	const removeList = (item) => {
		if (window.confirm('Вы действительно хотите удалить список?')) {
			axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
				onRemove(item.id);
			});
		}
	}

	return (
		<ul onClick={onClick} className="list">
			{
				items.map(item => <li
					className={classNames(
						item.className,
						{ 'active': item.active ? item.active : activeItem && activeItem.id === item.id }
					)
					}
					onClick={onClickItem ? () => onClickItem(item) : null}
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
					<small className="list__count">{item.tasks && item.tasks.length > 0 && item.tasks.length}</small>
				</li>)
			}

		</ul>
	)
}

export default List
