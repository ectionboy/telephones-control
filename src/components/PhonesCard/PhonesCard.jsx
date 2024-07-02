import React from "react";

const PhonesCard = ({ phone }) => {
	console.log(phone);
	return (
		<div>
			<br />
			{phone.model} <br />
			{phone.owner} <br />
			<img src={phone.imgUrl} alt="Зображення немає" width={"200px"} height={"200px"} />
			<br />
			{phone.description}
			<br />
			<b>{phone.address}</b>
		</div>
	);
};

export default PhonesCard;
