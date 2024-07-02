import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GroupMenu from "../GroupMenu/GroupMenu";



const LayoutGroup = ({ children }) => {
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
