import React, { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.scss'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import axios from 'axios'
import Sidebar from './Sidebar/Sidebar'

const Navbar = () => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const navbarRef = useRef(null);
	const avatarRef = useRef(null);
	const [data, setData] = useState();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	const controlNavbar = () => {
		const nav_height = navbarRef.current?.offsetHeight;
		const allStickyTop = document.querySelectorAll(".sticky-top");
		if (window.scrollY > lastScrollY && window.scrollY > nav_height) {
			setShow(false);
			allStickyTop.forEach((sticky) => {
				sticky.style.top = 2 + "rem";
			})
		} else {
			setShow(true);
			const sticky = document.querySelector(".sticky-top");
			allStickyTop.forEach((sticky) => {
				sticky.style.top = `calc(${nav_height + "px"} + 2rem)`;
			})
		}
		setLastScrollY(window.scrollY);

	};

	// useEffect(() => {
	// 	axios.get(`local/getImage`).then((res) => {
	// 		console.log(res.data);
	// 		setData(res.data);
	// 	})
	// }, [data])

	useEffect(() => {
		const nav_height = navbarRef.current?.offsetHeight;
		document.querySelector("body").style.paddingTop = nav_height + 'px';
		window.addEventListener('scroll', controlNavbar);
		// cleanup function
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};

	}, [lastScrollY]);

	return (
		<div ref={navbarRef} className={styles.Navbar_container + " " + 'container' + ` ${show ? styles.active : styles.hide}`}>
			<div className={styles.logo}>Logo</div>
			<div className={styles.links_container}>
				<div className={styles.link}>Find Teammates</div>
				<div className={styles.link_dropdown}><div>Participate</div><BiChevronDown /></div>
				<div className={styles.link_dropdown}><div>Learn</div><BiChevronDown /></div>
			</div>
			<div className={styles.search_container}>
				<input type="text" placeholder='Search...' />
				<BiSearch />
			</div>
			{
				isAuthenticated ?
					<div className={styles.authenticated_container}>
						<div ref={avatarRef} className={styles.avatar} onClick={() => setSidebarOpen(active => !active)}>
							<img src="/assets/images/avatar.jpg" alt="" />
						</div>
					</div>
					: <div className={styles.utils_container}>
						<div className={styles.login_signup}>
							<div className={styles.login}>Login</div>
							<div className={styles.auth_btn}>Signup</div>
						</div>
						<div className={styles.logged_in}></div>
					</div>
			}
			<div className={styles.sidebar_container + " " + `${sidebarOpen ? styles.open : ""}`}>
				<Sidebar avatarRef={avatarRef} setSidebarOpen={setSidebarOpen} />
			</div>

		</div>

	)
}

export default Navbar