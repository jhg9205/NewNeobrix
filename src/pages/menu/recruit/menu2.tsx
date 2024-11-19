import Layout from '@components/layouts/layout'
import { motion } from "framer-motion";
import FadeImg from '@components/ui/effect/fadeImg'
import subTileImg from '@images/menu/bg-recruit.png'
import subTileMobile from '@images/menu/bg-recruit-m.png'
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import CustomTable from '@components/ui/table/table'
import ment from '@data/recruit.json'

const Menu2 = () => {
	const [check, setCheck] = React.useState(false)
	const menulist = MenuListbar(PATH.RECRUIT01)

	const style: {} = {
		width: '100%',
		minHeight: '800px',
		textAlign: 'center'
	}
	const callEndFunc = () => {
		setCheck(true)
	}

	const subTitleTrans = (
		<motion.div
			className='intro-text'
			initial={{ opacity: 0, y: 50}}
			whileInView={{ opacity: 1, y: 0}}
			viewport={{ once: false }}
			transition={{
				ease: "easeInOut",
				duration: 0.5,
				y: { duration: 0.5 },
			}}
		>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						채<span>용공고</span>
					</p>
					<p className="menu_title_p2">네오브릭스와 함께 할 인재를 모집합니다.</p>
				</section>
			</div>
		</motion.div>
	)

	return (
		<Layout>
			<div id="listLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					{/*컨텐츠 div*/}
					<motion.div
						className='intro-text'
						initial={{ opacity: 0, y: 50}}
						whileInView={{ opacity: 1, y: 0}}
						viewport={{ once: false }}
						transition={{
							ease: "easeInOut",
							duration: 0.5,
							y: { duration: 0.5 },
						}}
					>
					<div className="contain">
						<CustomTable data={ment} menu={'ment'} />
					</div>
					</motion.div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu2
