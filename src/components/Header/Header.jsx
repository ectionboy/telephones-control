import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div>Telephones control</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Головна</NavLink>
					</li>
					<li>
						<NavLink to="/group/first">1</NavLink>
					</li>
					<li>
						<NavLink to="/group/second">2</NavLink>
					</li>
					<li>
						<NavLink to="/group/third">3</NavLink>
					</li>
					<li>
						<NavLink to="/group/fourth">4</NavLink>
					</li>
				</ul>
			</nav>
			<hr />
		</header>
	);
};

export default Header;
