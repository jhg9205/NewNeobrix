import Layout from '@components/layouts/layout'
import React from 'react'
import {
	AccordionSummary,
	AccordionDetails, Pagination, Divider
} from '@mui/material'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import qa from "@data/prcenter.json";
import HomeIcon from "@mui/icons-material/Home";
import {useNavigate} from "react-router-dom";
import {VITE_APP_IMGS} from "@common/const";


const Menu3 = () => {
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(15)
	const [expanded, setExpanded] = React.useState<string | false>('')
	const navigate = useNavigate();

	const data = qa.faq
	const style: {} = {
		width: '100%',
		minHeight: '1000px',
		textAlign: 'center'
	}

	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false)
	}


	return (
		<Layout>
			<div id="listLayout">
				<div className='menu-header'>
					<div style={{fontSize:'60px', fontWeight:'600'}}>
						FAQ
					</div>
					<div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
						<span>자주 물어보는 질문</span>
					</div>
				</div>
				<Divider/>
				<div className='menu-flow'>
					<HomeIcon onClick={()=>{navigate('/')}}/>
					<p>&gt; 홍보 &gt; </p><span>FAQ</span>
				</div>
				<Divider/>
				<div className="menu_title_contain" style={style}>
					{/*컨텐츠 div*/}
					<div className="contain">
						<TableContainer component={Paper} sx={{ width: '80%', margin: '0 auto' }}>
							<Table aria-label="simple table" id="accodionTable">
								<TableBody>
									{(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(
										(rowData: any, index: number) => (
											<TableRow id="tbBodyRowGlobalList" key={index}>
												<TableCell className="accodion">
													<Accordion
														style={{ boxShadow: 'none' }}
														expanded={expanded === `panel${index + 1}`}
														onChange={handleChange(`panel${index + 1}`)}
													>
														<AccordionSummary
															expandIcon={<ExpandMoreIcon style={{ fontSize: '2.5rem' }} />}
															aria-controls={`panel${index + 1}a-content`}
															id={`panel${index + 1}a-header`}
														>
															<span style={{ color: '#d3d3d3' }}>Q.</span>
															<p style={{ padding: '10px 0' }}>{rowData.title}</p>
														</AccordionSummary>
														<AccordionDetails
															style={{ display: 'flex', height: '100%', borderTop: '1px solid black', padding: '20px' }}
														>
															<div style={{ textAlign: 'center' }}>
																<p style={{ fontSize: '30px', fontWeight: '500', padding: '20px' }}>A.</p>
															</div>
															<div>
																{rowData.content.map((content: { img: string; text: string }, index: number) => (
																	<div key={index}>
																		<p style={{ fontSize: '18px', padding: '5px 0', textAlign: 'left' }}>{content.text}</p>
																		{content.img != '' ? (
																			<img src={VITE_APP_IMGS+content.img} loading="lazy" style={{ width: '80%' }} alt="pr" />
																		) : (
																			<></>
																		)}
																	</div>
																))}
															</div>
														</AccordionDetails>
													</Accordion>
												</TableCell>
											</TableRow>
										)
									)}
								</TableBody>
							</Table>
							<Pagination
								count={parseInt((data.length / 15).toString()) + 1}
								color="primary"
								onChange={(event, value) => setPage(value - 1)}
								page={page + 1}
								sx={{ display: 'flex' }}
								showFirstButton
								showLastButton
							/>
						</TableContainer>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu3
