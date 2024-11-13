import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'

import subTileImg from '@images/menu/bg-company.png'
import subTileMobile from '@images/menu/bg-company-m.png'
import { Location } from '@pages/main/location'
import React from 'react'
import { PATH } from '@common/domain'
import MenuListbar from './menuListbar'
import {Divider} from "@mui/material";
import {alert} from "@utils/alert";
import {ALERT} from "@common/const";
import {$FileDownLoad} from "@utils/request";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

const Menu4 = () => {
	const [location, setLocation] = React.useState(false)
	const menulist = MenuListbar(PATH.COMPANY03)

	const style = {
		width: '100%',
		minHeight: '800px'
	}

	const callEndFunc = () => {
		setLocation(true)
	}
	const handleClick = (event: React.MouseEvent) => {

		let file = '/download/NEOBRIX.pdf'
		let name = 'NEOBRIX_회사소개서'
		let type = 'pdf'
		alert.confirm({
			type: ALERT.CONFIRM,
			text: `'${name}' 를\n 저장 하시겠습니까?\n\n`,
			confirmText: '확인',
			confirmCall: () => {
				$FileDownLoad(file, name, type)
			}
		})
	}
	const subTileTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						L<span>OCATION</span>
					</p>
					<p className="menu_title_p2">오시는길</p>
				</section>
			</div>
		</Transition>
	)

	return (
		<Layout>
			<div style={{padding:'150px 300px 0 300px'}} className='menu-header'>
				<div style={{fontSize:'60px', fontWeight:'600'}}>
					오시는길
				</div>
				<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
					<span>네오브릭스 오시는 길</span>
					<div onClick={handleClick} className='download-div'>
						<SystemUpdateAltIcon/>
						<span className='download'>회사소개서 다운로드</span>
					</div>
				</div>
			</div>
			<Divider/>
			<div style={{height:'50px', paddingLeft:'300px',verticalAlign:'middle'}}>
				<p style={{alignContent:'center', fontSize:'20px'}}>기업소개 &gt; 오시는길</p>
			</div>
			<Divider/>
			<div id="locationLayout">
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
					<div className="contain">
						<Location isMenu={true} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu4
