import React, { useEffect, useState } from "react";

import db from "../../../db/data.json";
import PhonesCard from "../../PhonesCard/PhonesCard";

const GroupFirst = () => {
  const [data, setData] = useState([]);
	useEffect(() => {
		setData(JSON.parse(localStorage.getItem("phones")) || db.phones)
	}, [localStorage.getItem("phones")]);
	console.log(data);
	return (
		<>
			<div>GroupFirst</div>
			{data.map((e) => (
				<PhonesCard key={e.id} phone={e} />
			))}
		</>
	);
};

export default GroupFirst;
