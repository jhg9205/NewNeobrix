import * as React from 'react'
import { useState, useEffect } from 'react'
import { PATH } from '@common/domain'
import useClasses from '@utils/useClasses'
import logoBlack from '@images/common/logoN-black2.png'
import Menu from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Box} from "@mui/material";

let currentPath = ''

const HeaderPc2 = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const menuPath: string[] = [PATH.COMPANY00, PATH.BUSINESS00, PATH.PRCENTER00, PATH.RECRUIT00, PATH.CUSTOMER01, PATH.RESEARCH00]

	useEffect(() => {
		if (currentPath === location.pathname) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}

		currentPath = location.pathname
	}, [location])

	const defaultTab = {
		fontSize: '1.5rem',
		outline: 'none',
		fontFamily: 'Noto Sans KR',
		width: '100%',
		fontWeight: '800px'
	}
	const handleClick = (params: string) => {
		navigate(params)
	}
	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#000000' }, defaultTab),
		customStyleOnTab2: Object.assign({ color: 'rgb(0,0,0)' }, defaultTab),
		activeTab: Object.assign({ color: '#5094e9', fontWeight: 'bold', border: 0, right: 0 }, defaultTab),
		subActiveTab: Object.assign({ color: '#5094e9', fontWeight: 'bold', border: 0, right: 0 }, defaultTab),
		sX: {
			width: '100%',
			margin: '0 0 40',
			borderBottom: 1,
			borderColor: '#d5d5d5'
		},
		sp: {
			width: '100%',
			flexGrow: '1!important',
			webkitBoxFlex: '1!important',
			msFlexPositive: '1!important'
		},
		img: {
			width: '150px',
		},
		spacer: {
			width: '100%'
		},
		hidden: {
			display: 'none'
		}
	})

	const menuLst = ["기업소개", "사업영역", "인재채용", "홍보", "문의하기"];
	const subMenuList1 = ["인사말","비젼","면허 및 특허","오시는 길"];
	const subMenuList2 = ["사업영역"];
	const subMenuList3 = ["인재상","인사제도","채용전형"];
	const subMenuList4 = ["회사소식","CI","FAQ"];
	const subMenuList5 = ["문의하기"];

	const [hide, setHide]:any = useState({
		menu1: false,
		menu2: false,
		menu3: false,
		menu4: false,
		menu5: false,
	});
	const mouseEvent = (menuName:string, bool:boolean) => {
		const change:any = { ...hide };
		change[menuName] = bool;
		setHide(change);
	};

	const classes = useClasses(useStyles)
	return (
		<header>
			{/* 메인메뉴 */}
			<div id="headerTopWrap" className="top header2" style={{ backgroundColor: 'rgba(255,255,255,0.37)' }}>
				<Box sx={classes.activeTab}>
					<nav className="nav">
						<ul className="navContainer">
							<li>
								<div className="logoBox">
									<Link to={PATH.MAIN}>
										<img style={classes.img} src={logoBlack} alt="로고" />
									</Link>
								</div>
							</li>
							{menuLst.map((v, idx) => (
								<li
									key={idx}
									className="navContent"
								>
									<p>{v}</p>
								</li>
							))}
						</ul>
						<div className="detailMenu">
							<ul></ul>
							<ul>
								{subMenuList1.map((v, idx) => (
									<li>{v}</li>
								))}
							</ul>
							<ul>
								{subMenuList2.map((v, idx) => (
									<li>{v}</li>
								))}
							</ul>
							<ul>
								{subMenuList3.map((v, idx) => (
									<li>{v}</li>
								))}
							</ul>
							<ul>
								{subMenuList4.map((v, idx) => (
									<li>{v}</li>
								))}
							</ul>
							<ul>
								{subMenuList5.map((v, idx) => (
									<li>{v}</li>
								))}
							</ul>
						</div>
					</nav>
				</Box>
			</div>
		</header>
	)
}
export default HeaderPc2
