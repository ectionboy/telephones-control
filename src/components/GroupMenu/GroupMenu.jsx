import React, { useEffect, useState } from "react";
import db from "../../db/data.json";

const GroupMenu = () => {
	const [filtered, setFiltered] = useState([]);
	const [group, setGroup] = useState("0");
	const data = db.phones;
	// localStorage.setItem("phones", JSON.stringify(data));

	const handleGroup = (e) => {
		e.preventDefault();
		filter();
	};

	const filter = () => {
		switch (group) {
			case "0":
				setFiltered(data);
				break;
			case "1":
				const x = data.filter((element) => element.group === "1");
				setFiltered(x);
				break;
			case "2":
				const y = data.filter((element) => element.group === "2");
				setFiltered(y);
				break;
			case "3":
				const q = data.filter((element) => element.group === "3");
				setFiltered(q);
				break;
			case "4":
				const w = data.filter((element) => element.group === "4");
				setFiltered(w);
				break;
			default:
				setFiltered(data);
				break;
		}
        localStorage.setItem("phones", JSON.stringify(filtered));

	};
	console.log(filtered);

    useEffect(() => {
        
        return () => {
            localStorage.removeItem("phones")
        };
    }, []);

	return (
		<form onSubmit={(e) => handleGroup(e)}>
			<select name="group" defaultValue={0} onChange={(e) => setGroup(e.target.value)}>
				<option value={0}>Всі </option>
				<option value={1}>1 загін</option>
				<option value={2}>2 загін</option>
				<option value={3}>3 загін</option>
				<option value={4}>4 загін</option>
			</select>
			<hr />
			<button type="submit">Ok</button>
		</form>
	);
};

export default GroupMenu;
