import Layout from '@components/layouts/layout'
import { motion } from "framer-motion";
import talent2 from '@images/menu/talent2.png'
import talent3 from '@images/menu/talent3.png'
import React from 'react'
import {Button, Divider} from '@mui/material'
import { alert } from '@utils/alert'
import { ALERT } from '@common/const'
import { $FileDownLoad } from '@utils/request'
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import Transition from "@components/ui/transition/transition";

const Menu1 = () => {
	const [check, setCheck] = React.useState(false)
	const navigate = useNavigate()
	const style: {} = {
		width: '100%',
		minHeight: '800px',
		textAlign: 'center'
	}
	const callEndFunc = () => {
		setCheck(true)
	}

	const handleClick = (event: React.MouseEvent) => {
		alert.confirm({
			type: ALERT.CONFIRM,
			text: '입사지원서를\n 저장 하시겠습니까?\n\n',
			confirmText: '확인',
			confirmCall: () => {
				$FileDownLoad('/download/NEOBRIX_RECRUIT.xlsx', 'NEOBRIX_RECRUIT', 'xlsx')
			}
		})
	}


	return (
		<Layout>
			<div className='menu-header'>
				<div style={{fontSize:'60px', fontWeight:'600'}}>
					인재상
				</div>
				<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
					<span>네오브릭스가 추구하는 인재</span>
				</div>
			</div>
			<Divider/>
			<div className='menu-flow'>
				<HomeIcon onClick={()=>{navigate('/')}}/>
				<p>&gt; 인재채용 &gt; </p><span>인재상</span>
			</div>
			<Divider/>
			<div id="listLayout">
				<div className="menu_title_contain" style={style}>
					{/*컨텐츠 div*/}
					<div className="contain" style={{ display: 'grid', overflow: 'hidden' }}>
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
							<img src={talent2} alt="recruit" className="recruit-img" style={{margin:'0 auto'}}/>
						</motion.div>
						<img src={talent3} alt="recruit" className="recruit-img" />
						<Button
							id="recruitFile"
							onClick={handleClick}
							variant="contained"
							sx={{ width: '200px', height: '70px', borderRadius: '30px', margin: '0 auto', fontSize: '17px', fontWeight: 'bold' }}
						>
							입사지원서 다운로드
						</Button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
