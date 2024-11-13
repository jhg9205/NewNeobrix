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
			<div>
				<div>
					오시는길
				</div>
				<div>
					네오브릭스 오시는 길
				</div>
				<Divider/>
			</div>
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
