import React from "react";

import db from "../../../db/data.json";
import PhonesCard from "../../PhonesCard/PhonesCard";

const GroupFirst = () => {
	const data = db.groups.first;
	console.log(data);

	return (
		<>
			<div>GroupFirst</div>
      {data.phones.map((e) => (<PhonesCard phone={e} />))}
			
		</>
	);
};

export default GroupFirst;
