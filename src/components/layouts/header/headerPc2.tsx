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
	const subMenuList1 = [
		{"title":"인사말",		"link":"/company"},
		{"title":"비젼",		"link":"/business"},
		{"title":"면허 및 특허",	"link":"/business"},
		{"title":"오시는길",		"link":"/business"}];
	const subMenuList2 = [
		{"title":"사업영역",		"link":"/"}
	];
	const subMenuList3 = [
		{"title":"인재상",		"link":"/business"},
		{"title":"인사제도",		"link":"/business"},
		{"title":"채용전형",		"link":"/business"}
	];
	const subMenuList4 = [
		{"title":"회사소식",		"link":"/"},
		{"title":"CI",			"link":"/"},
		{"title":"FAQ",			"link":"/"}
	];
	const subMenuList5 = [
		{"title":"문의하기",		"link":"/"}
	];

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
			<div id="headerTopWrap" className="top header2" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
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
									<li key={idx}>
										<Link to={v.link}>
											{v.title}
										</Link>
									</li>
								))}
							</ul>
							<ul>
								{subMenuList2.map((v, idx) => (
									<li key={idx}>
										<Link to={v.link}>
											{v.title}
										</Link>
									</li>
								))}
							</ul>
							<ul>
								{subMenuList3.map((v, idx) => (
									<li key={idx}>
										<Link to={v.link}>
											{v.title}
										</Link>
									</li>
								))}
							</ul>
							<ul>
								{subMenuList4.map((v, idx) => (
									<li key={idx}>
										<Link to={v.link}>
											{v.title}
										</Link>
									</li>
								))}
							</ul>
							<ul>
								{subMenuList5.map((v, idx) => (
									<li key={idx}>
										<Link to={v.link}>
											{v.title}
										</Link>
									</li>
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
