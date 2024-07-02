import React, { useState } from "react";
import db from "../../db/data.json";

const GroupMenu = () => {
	const [group, setGroup] = useState(0);
    console.log(db.phones)
    localStorage.setItem("phones", JSON.stringify(db.phones))
console.log(group)

    const handleGroup = (e) => {
        setGroup(e.target.value);
    }

	return (
		<div>
			<select name="group" defaultValue={0} onChange={e => handleGroup(e)}>
				<option value={0}>Всі </option>
				<option value={1}>1 загін</option>
				<option value={2}>2 загін</option>
				<option value={3}>3 загін</option>
				<option value={4}>4 загін</option>
			</select>
			<hr />
		</div>
	);
};

export default GroupMenu;
