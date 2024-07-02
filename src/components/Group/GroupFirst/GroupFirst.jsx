import React from "react";

import db from "../../../db/data.json";
import PhonesCard from "../../PhonesCard/PhonesCard";

const GroupFirst = () => {
	const data = JSON.parse(localStorage.getItem("phones"));
	console.log(data);

	return (
		<>
			<div>GroupFirst</div>
      {data? data.map((e) => (<PhonesCard key={e.id} phone={e} />)):""}
			
		</>
	);
};

export default GroupFirst;
