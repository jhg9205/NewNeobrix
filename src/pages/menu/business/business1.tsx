import Layout from "@components/layouts/layout";
import {Helmet} from "react-helmet-async";
import {getViewSize} from "@utils/functions";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {$FileDownLoad} from "@utils/request";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import {Box, Divider, Grid, Tab, Tabs} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessBar from "@pages/menu/business/businessBar";
import React from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import application from '@images/menu/application.gif'
import FadeImg from "@components/ui/effect/fadeImg";
import shake from '@images/menu/shaking.png'
import maintenance from '@images/menu/maintenance.png'
import efficiently from '@images/menu/efficiently.png'
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className='tab-panel'
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Business1 = () => {

    const [value, setValue] = React.useState(0);
    const style = {
        width: '100%',
        minHeight: '1000px'
    }
    const navigate = useNavigate()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Layout>
            <Helmet>
                <title>IT SERVICE - 네오브릭스</title>
            </Helmet>
            <div id="companyLayout">
                {getViewSize()=='lg'?
                    <>
                        <div className='menu-header'>
                            <div style={{fontSize:'60px', fontWeight:'600'}}>
                                IT SERVICE
                            </div>
                            <div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
                                <div style={{float:'right',fontSize:'16px'}}>
                                    <div className='header-down-left' onClick={()=>navigate('/customer')}>
                                        <MailOutlineRoundedIcon style={{marginRight:'8px'}}/>
                                        고객문의
                                    </div>
                                    ·
                                    <div className='header-down-right' onClick={()=>$FileDownLoad('/download/NEOBRIX.pdf', 'NEOBRIX_회사소개서', 'pdf')}>
                                        <PlagiarismOutlinedIcon style={{marginRight:'8px'}}/>
                                        회사소개서
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider/>
                        <div className='menu-flow'>
                            <HomeIcon onClick={()=>{navigate('/')}}/>
                            <p>&gt; 사업영역 &gt; </p><span>IT SERVICE</span>
                        </div>
                    </>:
                    <Grid container>
                        <Grid item sm={8} className='menu-header-mobile'>
                            <div className='menu-flow-mobile'>
                                <HomeIcon onClick={()=>{navigate('/')}}/>
                                <span> · 사업영역 · IT SERVICE</span>
                            </div>
                            <div className='menu-sub-mobile'>
                                <p>IT SERVICE</p>
                            </div>
                        </Grid>
                        <Grid item sm={4} className='menu-bg-mobile'>

                        </Grid>
                    </Grid>
                }
                <Divider/>
                <div className="menu_title_contain" style={style}>
                    {/*컨텐츠 div*/}
                    <Grid container>
                        <Grid item lg={2} md={2}>
                            {getViewSize() == 'lg'?<BusinessBar index={'panel1'}/>:<></>}
                        </Grid>
                        <Grid item lg={8} md={10}>
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
                                    <div className='intro-dream' style={{margin:'100px auto 50px auto'}}>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>Neo BRIX는 시스템 구축/운영 경험과</p>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>전문화된 구성원으로 Application IT서비스를 제공합니다.</p>
                                    </div>
                                </motion.div>
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
                            <Grid container>
                                <Grid item lg={4} style={getViewSize()=='lg'?{justifyItems:'center'}:{justifyItems:'center',width:'100%'}}>
                                    <FadeImg pc={application} delay={1500} isContent={true} id={'application'}/>
                                </Grid>
                                <Grid item lg={8} style={getViewSize()=='lg'?{fontSize:'20px', lineHeight:'30px',marginTop:'50px'}:{fontSize:'20px', lineHeight:'30px',margin:'50px 50px 0 50px'}}>
                                    <span>
                                        급격한 기술 변화 및 혁신이 이루어지는 비즈니스 환경에서 기술 통합 및 협업은 단순한 옵션을 넣어 필수적인 요소입니다.
                                        복잡하고 다양한 IT시스템과 플랫폼, 고객 업무 및 프로세스에 대한 이해를 바탕으로 맞춤형 IT서비스를 제공합니다.
                                        IT 컨설팅 부터 시스템 통합-구축-운영 등 풍부한 구축 경험과 및 전문화된 조직을 바탕으로 고객의 비즈니스 환경 변화에 대응하고 성장 할 수 있도록 지원하는 것입니다.
                                    </span>
                                </Grid>
                            </Grid>
                            </motion.div>
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
                                <Grid container className='business-img-container'>
                                    <Grid item lg={1.5} md={0} sm={0}></Grid>
                                    <Grid item lg={3} md={4} sm={4}>
                                        <img src={maintenance}/>
                                        <p className='vision-main'>IT서비스 수준 향상</p>
                                        <p className='vision-sub'>및 유지관리</p>
                                    </Grid>
                                    <Grid item lg={3} md={4} sm={4}>
                                        <img src={efficiently}/>
                                        <p className='vision-main'>IT서비스 비용절감</p>
                                        <p className='vision-sub'>및 효율화</p>
                                    </Grid>
                                    <Grid item lg={3} md={4} sm={4}>
                                        <img src={shake}/>
                                        <p className='vision-main'>고객서비스</p>
                                        <p className='vision-sub'>만족 향상</p>
                                    </Grid>
                                    <Grid item lg={1.5} md={0} sm={0}></Grid>
                                </Grid>
                            </motion.div>
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
                                <Box sx={{ width: '100%' }} className='business-tab-container'>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="구축" {...a11yProps(0)} />
                                            <Tab label="운영" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <CustomTabPanel value={value} index={0}>
                                        <p className='tab-content'>
                                            고객의 요구사항에 맞춤형 시스템 구축으로 고객 신뢰도를 쌓아가고 있습니다.
                                        </p>
                                        <p className='tab-content'>
                                            특히, 환경-국토-복지-교육 등 정보시스템 신규개발 사업을 수행하고 있으며, 최근 요구되는
                                            4차 산업혁명 기술에 걸맞는 서비스 제공을 위해 체계적인 방법론을 바탕으로 고객의 정보화 과정을 안정적이고 신속하게 진행합니다.
                                        </p>
                                        <Grid container>
                                            <Grid item lg={6} sm={12}>
                                                <p className='tab-underline'>환경 분야</p>
                                                <Grid container className='tab-sub-container'>
                                                    <Grid item lg={5}>이미지</Grid>
                                                    <Grid item lg={7} className='tab-sub-text'>
                                                        <p>· 오염원관리시스템</p>
                                                        <p>· 스마트 도시침수</p>
                                                        <p>· 온실가스/에너지 시스템</p>
                                                        <p>· 상/하수도 관리 시스템</p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={6} sm={12}>
                                                <p className='tab-underline'>국토 분야</p>
                                                <Grid container className='tab-sub-container'>
                                                    <Grid item lg={5}>이미지</Grid>
                                                    <Grid item lg={7} className='tab-sub-text'>
                                                        <p>· 국유재산 관리 시스템</p>
                                                        <p>· 토지보상 관리 시스템</p>
                                                        <p>· 주택매입 및 안전관리 시스템</p>
                                                        <p>· 통합 시설물 관리 시스템</p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={6} sm={12}>
                                                <p className='tab-underline'>복지/교육 분야</p>
                                                <Grid container className='tab-sub-container'>
                                                    <Grid item lg={5}>이미지</Grid>
                                                    <Grid item lg={7} className='tab-sub-text'>
                                                        <p>· 생활보건 시스템</p>
                                                        <p>· 맞춤형 복지 시스템</p>
                                                        <p>· 학교행정 시스템</p>
                                                        <p>· 학교수업지원 시스템</p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item lg={6} sm={12}>
                                                <p className='tab-underline'>기타</p>
                                                <Grid container className='tab-sub-container'>
                                                    <Grid item lg={5}>이미지</Grid>
                                                    <Grid item lg={7} className='tab-sub-text'>
                                                        <p>· 공공데이터 포털</p>
                                                        <p>· 인구/주택 총 조사</p>
                                                        <p>· BIG DATA플랫폼 구축</p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={1}>
                                        <p className='tab-content'>
                                            IT Application SW에 대한 구축, 정보화 컨설팅, 모바일 등 다양한 IT기반 기술의 시스템 구축과
                                        </p>
                                        <p className='tab-content'>
                                            고객에게 선진 기술 TREND 적용에 대한 컨설팅 및 기술지원 서비스를 상시 제공하고 있습니다.
                                        </p>
                                        <Grid item lg={12}>
                                            <p className='tab-underline'>Application 개발/개선/유지보수</p>
                                            <Grid container className='tab-sub-container'>
                                                <Grid item lg={4}>이미지</Grid>
                                                <Grid item lg={8} className='tab-sub-text'>
                                                    <p>· 분야별 전문가와 개발방법론을 기반으로 고객의 IT 수준을 진단하고 비즈니스 환경에 적합한
                                                    Application 개발 및 운영</p>
                                                    <p>· 운영중인 Application의 기능 및 성능 개선 서비스</p>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={12}>
                                            <p className='tab-underline'>서비스관리</p>
                                            <Grid container className='tab-sub-container'>
                                                <Grid item lg={4}>이미지</Grid>
                                                <Grid item lg={8} className='tab-sub-text'>
                                                    <p>· 고객에게 최적화된 정보시스템 관련 설비, 인력 등의 정보 자산 지원 서비스 제공</p>
                                                    <p>· 비즈니스 환경을 고려하여 체계적인 품질 관리를 통해 운영 최적화 및 신속한 장애 대응</p>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Layout>
    )
}
export default Business1