import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GroupMenu from "../GroupMenu/GroupMenu";

import data from "../../db/data.json"

const LayoutGroup = ({ children }) => {
    console.log(data.groups)
	return (
		<>
			<Header />
			<GroupMenu />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default LayoutGroup;
