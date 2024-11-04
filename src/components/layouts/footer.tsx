import logo2 from '@images/common/logoN-white.png'
import { Hidden, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import useClasses from '@utils/useClasses'
import { Link } from 'react-router-dom'

const Footer = () => {
	const [value, setValue] = useState(0)
	const defaultTab = {
		fontSize: '1rem',
		outline: 'none',
		fontFamily: 'Noto Sans KR',
		padding: '0 2rem 0 2rem',
		display: 'block',
		width: '100%'
	}
	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#999999' }, defaultTab)
	})

	const classes = useClasses(useStyles)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<footer>
			<div id="footerLogo">
				<Hidden smUp>
					<SubFooter size="mobile" />
				</Hidden>
				<Hidden smDown lgUp>
					<SubFooter size="tablet" />
				</Hidden>
				<Hidden lgDown>
					<SubFooter size="pc" />
				</Hidden>
			</div>
		</footer>
	)
}

const SubFooter = (props: { size: string }) => {
	return (
		<div className={props.size}>
			<img src={logo2} alt='dd'/>
			<hr className="footLine" />
			<ul>
				<li>서울특별시 송파구 백제고분로7길 16-9 ,4층 401호(잠실동, 한신빌딩)</li>
				<li>TEL : 02-423-7860 // FAX : 0580-903-7860</li>
				<li>Copyright 2024 NEOBRIX. All rights reserved.</li>
			</ul>
		</div>
	)
}

export default Footer
