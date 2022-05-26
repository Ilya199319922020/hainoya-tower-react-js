import React, { useState } from 'react';
import s from './HanoiTower.module.css';

const initialData = {
	tower: [
		{
			id: 1,
			details: [
				{ id: 1, title: 1, width: '150 px' },
				{ id: 2, title: 2, width: '100 px' },
				{ id: 3, title: 3, width: '50 px' },
			],
		},
		{ id: 2, details: [] },
		{ id: 3, details: [] },
	],
	textData: {
		time: null,
		quantity: null,
	}
};


const Tower = (props) => {
	return (

		<div className={s.tower} >
			<div className={s.line} >
				<div className={s.lineVertical} >
				</div>
			</div>
		</div >

	)
};


const HanoiTower = () => {

	const [stateTower, setStateTower] = useState(initialData.tower);
	const [currentTower, setCurrentTower] = useState(null);
	const [currentDetail, setCurrentDetail] = useState(null);

	const dragStarHandler = (e, towerItem, element) => {
		setCurrentTower(towerItem);
		setCurrentDetail(element);
	};
	const dragEndHandler = (e) => {
	};
	const dragOverHandler = (e) => {
		e.preventDefault();
	};
	const dropHandler = (e, towerItem, element) => {
		e.preventDefault();
		// console.log(towerItem);
		// // const currentIndex = currentTower.details.indexOf(currentDetail);

		// currentTower.details.splice(0, -1);

		// const dropIndex = towerItem.details.indexOf(element);
		// towerItem.details.splice(dropIndex + 1, 0, currentDetail);          //
		// setStateTower(stateTower.map(c => {
		// 	if (c.id === towerItem.id) {
		// 		return towerItem
		// 	}
		// 	if (c.id === currentTower.id) {
		// 		return currentTower
		// 	}
		// 	return c;
		// }));

	};


	const dropDetailHandler = (e, towerItem, element) => {

		towerItem.details.push(currentDetail);
		// const currentIndex = currentTower.details.indexOf(currentDetail);
		currentTower.details.splice(0, 1);
		console.log(currentDetail);
		console.log(currentTower);
		setStateTower(stateTower.map(c => {
			if (c.id === towerItem.id) {
				return towerItem
			}
			if (c.id === currentTower.id) {
				return currentTower
			}
			return c;
		}))
		console.log(stateTower)
	};


	const listTover = stateTower

		.map(towerItem => <div
			onDragOver={(e) => dragOverHandler(e)}
			onDrop={(e) => dropDetailHandler(e, towerItem)}
			className={s.tower}
			key={towerItem.id}>
			<div className={s.detailsList}>
				{towerItem.details
					.map(element => <div
						onDragStart={(e) => dragStarHandler(e, towerItem, element)}
						onDragLeave={(e) => dragEndHandler(e)}
						onDragEnd={(e) => dragEndHandler(e)}
						onDragOver={(e) => dragOverHandler(e)}
						onDrop={(e) => dropHandler(e, towerItem, element)}
						draggable={true}
						key={element.id}
						title={element.title}
						className={s.details}
					>
					</div>
					)}
			</div>
		</div >
		);


	return (
		<div className={s.container}>
			{listTover}
			{/* <TextData quantityProcess={state.quantityProcess} time={state.time} /> */}
		</div>)

};

export default HanoiTower;
