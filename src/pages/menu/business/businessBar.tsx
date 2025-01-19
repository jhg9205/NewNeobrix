import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion";
import {Button} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {getViewSize} from "@utils/functions";
import {useNavigate} from "react-router-dom";
import {PATH} from "@common/domain";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: '#ffffff',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
            transform: 'rotate(90deg)',
        },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: '#f38225',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const BusinessBar = (props:{index:string}) => {

    const [expanded, setExpanded] = React.useState<string | false>(props.index);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const navigate = useNavigate()

    return (
        <div className='business-bar'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography component="span">- IT SERVICE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <motion.div
                        className="card"
                        id="card1"
                        whileHover={{
                            boxShadow : '0px 0px 10px #666',
                            transform:getViewSize() == 'lg'?'translateY(-10px)':'translateY(-230px) translateX(-100px)'
                        }}
                    >
                        <Button
                            onClick={()=>navigate(PATH.BUSINESS01)}
                            style={{cursor:'pointer',height:'100%', width:'100%'}}>
                            <div
                                className='intro-card-button'>
                                <p>IT Service</p>
                                <span>기술 다양성을 넘어 효율적인 통합으로 비지니스 혁신을 제공</span>
                                <div className='intro-card-arrow'>
                                    <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                </div>
                            </div>
                        </Button>
                    </motion.div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography component="span">- DATA MINING</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <motion.div
                        className="card"
                        id="card2"
                        whileHover={{
                            boxShadow : '0px 0px 10px #666',
                            transform:getViewSize() == 'lg'?'translateY(-10px)':'translateY(-230px) translateX(-100px)'
                        }}
                    >
                        <Button
                            onClick={()=>navigate(PATH.BUSINESS02)}
                            style={{cursor:'pointer',height:'100%', width:'100%'}}>
                            <div
                                className='intro-card-button'>
                                <p>Data Mining Vision</p>
                                <span>데이터 탐색을 넘어 정보의 트랜드-관계를 통한 예측정보 제공</span>
                                <div className='intro-card-arrow'>
                                    <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                </div>
                            </div>
                        </Button>
                    </motion.div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography component="span">- MOBILE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <motion.div
                        className="card"
                        id="card3"
                        whileHover={{
                            boxShadow : '0px 0px 10px #666',
                            transform:getViewSize() == 'lg'?'translateY(-10px)':'translateY(-230px) translateX(-100px)'
                        }}
                    >
                        <Button
                            onClick={()=>navigate(PATH.BUSINESS03)}
                            style={{cursor:'pointer',height:'100%', width:'100%'}}>
                            <div
                                className='intro-card-button'>
                                <p>Mobile in my hand</p>
                                <span>GIS와 결합된 스마트한 현장 업무환경 제공</span>
                                <div className='intro-card-arrow'>
                                    <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                </div>
                            </div>
                        </Button>
                    </motion.div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography component="span">- LAND/FACILITY</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <motion.div
                        className="card"
                        id="card4"
                        whileHover={{
                            boxShadow : '0px 0px 10px #666',
                            transform:getViewSize() == 'lg'?'translateY(-10px)':'translateY(-230px) translateX(-100px)'
                        }}
                    >
                        <Button
                            onClick={()=>navigate(PATH.BUSINESS04)}
                            style={{cursor:'pointer',height:'100%', width:'100%'}}>
                            <div
                                className='intro-card-button'>
                                <p>Land/Facility Management</p>
                                <span>효율적 국토 및 시설물 관리를 위한 GIS와 결합된 관리시스템 제공</span>
                                <div className='intro-card-arrow'>
                                    <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                </div>
                            </div>
                        </Button>
                    </motion.div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography component="span">- ENVIRONMENT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <motion.div
                        className="card"
                        id="card5"
                        whileHover={{
                            boxShadow : '0px 0px 10px #666',
                            transform:getViewSize() == 'lg'?'translateY(-10px)':'translateY(-230px) translateX(-100px)'
                        }}
                    >
                        <Button
                            onClick={()=>navigate(PATH.BUSINESS05)}
                            style={{cursor:'pointer',height:'100%', width:'100%'}}>
                            <div
                                className='intro-card-button'>
                                <p>Environment</p>
                                <span>중대재해 발생 시 법적대응에 활용할 수 있는 솔루션</span>
                                <div className='intro-card-arrow'>
                                    <ArrowForwardIcon fontSize='large' sx={{color:'white', fontSize:'50px'}}/>
                                </div>
                            </div>
                        </Button>
                    </motion.div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default BusinessBar