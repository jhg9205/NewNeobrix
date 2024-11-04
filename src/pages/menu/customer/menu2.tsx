import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-customer.png'
import subTileMobile from '@images/menu/bg-customer-m.png'
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import {Card, CardActionArea, CardContent, CardMedia, Fade, Grid, Typography} from '@mui/material'
import util01 from '@images/main/fileMain.jpg'
import util02 from '@images/main/recruitImg.jpg'
import companyProfilePdf from '@data/download/DEBRIX.pdf'
import { alert } from '@utils/alert'
import { ALERT } from '@common/const'
import { $FileDownLoad } from '@utils/request'

const Menu2 = () => {
	const [check, setCheck] = React.useState(false)
	const menulist = MenuListbar(PATH.CUSTOMER01)

	const style: {} = {
		width: '100%',
		minHeight: '800px',
		textAlign: 'center'
	}
	const callEndFunc = () => {
		setCheck(true)
	}

	const subTitleTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						자<span>료실</span>
					</p>
					<p className="menu_title_p2">다양한 자료들을 다운받으실 수 있습니다.</p>
				</section>
			</div>
		</Transition>
	)

	const handleClick = (event: React.MouseEvent) => {
		const id = event.currentTarget.id
		let file = ''
		let name = ''
		let type = ''


		switch (id){
			case 'cardCompanyProfile':
				file = '/download/NEOBRIX.pdf'
				name = 'NEOBRIX_회사소개서'
				type = 'pdf'
				break
			case 'cardRecruitFile':
				file = '/download/NEOBRIX_RECRUIT.xlsx'
				name = 'NEOBRIX_입사지원서'
				type = 'xlsx'
				break
		}

		alert.confirm({
			type: ALERT.CONFIRM,
			text: `'${name}' 를\n 저장 하시겠습니까?\n\n`,
			confirmText: '확인',
			confirmCall: () => {
				$FileDownLoad(file, name, type)
			}
		})
	}

	return !check ? (
		<Layout>
			{/*<div id="listLayout">*/}
			{/*	<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} />*/}
			{/*	{menulist}*/}
			{/*	<div className="menu_title_contain" style={style}>*/}
			{/*		{subTitleTrans}*/}
			{/*	</div>*/}
			{/*</div>*/}
			<div id="prcenterLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			{/*<div id="listLayout">*/}
			{/*	<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} />*/}
			{/*	{menulist}*/}
			{/*	<div className="menu_title_contain" style={style}>*/}
			{/*		{subTitleTrans}*/}
			{/*		/!*컨텐츠 div*!/*/}
			{/*		<div className="contain">*/}
			{/*			<CustomTable data={util} menu={'util'} />*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			<div id="prcenterLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					<div className="contain">
						<Grid container style={{justifyContent:'center', width:'700px'}}>
							<Grid item lg={6} >
								<Fade in={true} timeout={1500}>
									<Card id="cardCompanyProfile" sx={{ maxWidth: 345, height:'288.266px' }} onClick={handleClick}>
										<CardActionArea>
											<CardMedia component="img" height="auto" image={util01} alt="회사소개서" />
											<CardContent sx={{backgroundColor:'#1976d2'}}>
												<Typography gutterBottom variant="h5" component="div">
													네오브릭스 - 회사소개서
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Fade>
							</Grid>
							<Grid item lg={6} >
								<Fade in={true} timeout={1500}>
									<Card id="cardRecruitFile" sx={{ maxWidth: 345, height:'288.266px' }} onClick={handleClick}>
										<CardActionArea>
											<CardMedia component="img" height="auto" image={util02} alt="입사지원서" />
											<CardContent sx={{backgroundColor:'#1976d2'}}>
												<Typography gutterBottom variant="h5" component="div">
													네오브릭스 - 입사지원서
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Fade>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu2
