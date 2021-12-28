import React from 'react';

import List from '../List';

import './AddList.scss';

function AddList() {

	// TODO 1.08.18 https://www.youtube.com/watch?v=PsQC6zOo3FI&list=PL0FGkDGJQjJGBcY_b625HqAKL4i5iNZGs&index=2

	return (
		<div className='add-list'>
			<List
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
			<div className="add-list__popup">

			</div>
		</div>
	)
}

export default AddList
