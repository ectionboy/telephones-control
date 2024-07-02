import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div>Telephones control</div>
			<nav>
				<ul>
        <li>
						<NavLink to="/">Головна</NavLink>
					</li>
					<li>
						<NavLink to="">1</NavLink>
					</li>
					<li>
						<NavLink to="">2</NavLink>
					</li>
					<li>
						<NavLink to="">3</NavLink>
					</li>
					<li>
						<NavLink to="">4</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
