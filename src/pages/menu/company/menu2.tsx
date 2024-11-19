import Layout from '@components/layouts/layout'
import React from 'react'
import {Divider} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";
import dream from '@images/menu/intro-dream.png'
import vission from '@images/menu/intro-vission.png'
import { motion } from "framer-motion";


const Menu2 = () => {

	const [patent, setPatent] = React.useState(false)
	const navigate = useNavigate()
	const callEndFunc = () => {
		setPatent(true)
	}

	return (
		<Layout>
			<div className='menu-header'>
				<div style={{fontSize:'60px', fontWeight:'600'}}>
					비전 및 이념
				</div>
				<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
					<span>네오브릭스 비전 및 핵심가치</span>
				</div>
			</div>
			<Divider/>
			<div className='menu-flow'>
				<HomeIcon onClick={()=>{navigate('/')}}/>
				<p>&gt; 기업소개 &gt; </p><span>비전 및 이념</span>
			</div>
			<Divider/>
			<div id="organizationLayout">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						y: { duration: 1 },
					}}
				>
				<div className='intro-dream'>
						<div className="menu_title_p_fixed_warp">
							<section>
								<p className="menu_title_p1">
									Neo<span>Vission</span>
								</p>
								<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
							</section>
						</div>
					<img src={dream}/>
				</div>
				</motion.div>
				<Divider/>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						y: { duration: 1 },
					}}
				>
				<div className='intro-value'>
					<div className="menu_title_p_fixed_warp">
						<section>
							<p className="menu_title_p1">
								Neo<span>Values</span>
							</p>
							<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
						</section>
					</div>
					<img src={vission}/>
				</div>
				</motion.div>
			</div>
		</Layout>
	)
}

export default Menu2
