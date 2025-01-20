import Layout from "@components/layouts/layout";
import {Helmet} from "react-helmet-async";
import {getViewSize} from "@utils/functions";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {$FileDownLoad} from "@utils/request";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import {Divider, Grid} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessBar from "@pages/menu/business/businessBar";
import React from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import FadeImg from "@components/ui/effect/fadeImg";
import maps from "@images/menu/maps.gif";
import land1 from "@images/menu/land1.png";
import land2 from "@images/menu/land2.png";
import land3 from "@images/menu/land3.png";
import land4 from "@images/menu/land4.png";
import land5 from "@images/menu/land5.png";
import land6 from "@images/menu/land6.png";
import land7 from "@images/menu/land7.png";
import land8 from "@images/menu/land8.png";
import land9 from "@images/menu/land9.png";
import land10 from "@images/menu/land10.png";
import land11 from "@images/menu/land11.png";

const Business4 = () => {

    const style = {
        width: '100%',
        minHeight: '1000px'
    }
    const navigate = useNavigate();

    return (
        <Layout>
            <Helmet>
                <title>LAND/FACILITY - 네오브릭스</title>
            </Helmet>
            <div id="companyLayout">
                {getViewSize()=='lg'?
                    <>
                        <div className='menu-header'>
                            <div style={{fontSize:'60px', fontWeight:'600'}}>
                                LAND/FACILITY
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
                            <p>&gt; 사업영역 &gt; </p><span>LAND/FACILITY</span>
                        </div>
                    </>:
                    <Grid container>
                        <Grid item sm={8} className='menu-header-mobile'>
                            <div className='menu-flow-mobile'>
                                <HomeIcon onClick={()=>{navigate('/')}}/>
                                <span> · 사업영역 · LAND/FACILITY</span>
                            </div>
                            <div className='menu-sub-mobile'>
                                <p>LAND/FACILITY</p>
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
                            {getViewSize() == 'lg'?<BusinessBar index={'panel4'}/>:<></>}
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
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>Neo BRIX는 효율적인 국토 및 시설물 관리를 위한</p>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>GIS기반 공동활용 솔루션을 제공합니다.</p>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>특히, 공사-토지보상-국유재산-빈집(안전진단)-상/하수도 분야에</p>
                                        <p className='intro-dream-title' style={{textAlign:'center', margin:0}}>대한 비지니스에 대한 이해도가 매우 높습니다.</p>
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
                                    <FadeImg pc={maps} delay={1500} isContent={true} id={'application'}/>
                                </Grid>
                                <Grid item lg={8} style={{fontSize:'20px', lineHeight:'30px',marginTop:'50px'}}>
                                    <span>
                                        급변하는 IT 및 공간정보 기술에 있어서 NeoBRIX는 OpenGIS (GeoServer / GeoDjango / OpenLayers / QGIS)를 활용한
                                        Enterprise GIS구축을 통해 국토 개발에 필요한 공사관리, 토지보상, 국유재산, 빈집(건축물 안전관리),
                                        상/하수도 분야에 효율적으로 업무컨설팅 및 기술을 적용하고 있습니다.
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
                                <img src={land1} style={{width:'70%', margin:'50px 0 0 0'}}/>
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
                                <img src={land2} style={{width:'60%', margin:'100px 0'}}/>
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
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'0 0 20px 100px'}}>토지보상 시스템</p>
                                <Divider/>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'20px 0 0 100px'}}>
                                    · 최신 ICT 기술을 적용하여 보상업무 지원을 위한 단계별 업무 절차 시스템화(사업정보, 공부자료, 감정평가, 협의, 이의재결, 소송관리)
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 각 고객사 내/외부 시스템 연계를 통한 정보공유 체계 및 업무효율성 극대화
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 중앙토지수용위원회 시스템 연계를 통한 수용재결 업무의 편의성 증대
                                </p>
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
                                <Grid container style={{marginTop:'50px'}}>
                                    <Grid item lg={1.5}></Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>토지조서 작성</p>
                                        <img src={land3} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>감정평가 의뢰</p>
                                        <img src={land4} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>보상협의 계약</p>
                                        <img src={land5} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={1.5}></Grid>
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
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'0 0 20px 100px'}}>상수도 시설물관리</p>
                                <Divider/>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'20px 0 0 100px'}}>
                                    · 공간정보 기술과 최적화된 웹 기반 기술 적용을 통해 효율적이고 정확하며 안전한 상수도관리시스템 구축
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 분산 관리되고 있는 준공도면의 통합관리(도면분실에 대한 대비 및 유사 시 활용)
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · GIS 분석 기능을 활용한 누수, 단수 업무 기능 개선 및 관제 시스템 강화
                                </p>
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
                                <Grid container style={{marginTop:'50px'}}>
                                    <Grid item lg={1.5}></Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>3D 시각분석 - 상수관로 분석</p>
                                        <img src={land6} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>상수도 시설물 - 현황 및 통계</p>
                                        <img src={land7} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>준공도면 통합관리</p>
                                        <img src={land8} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={1.5}></Grid>
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
                                <p style={{fontSize:'30px', fontWeight:'bold', textAlign:'left', padding:'0 0 20px 100px'}}>국가(공유)재산 시스템</p>
                                <Divider/>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'20px 0 0 100px'}}>
                                    · 공유재산 관리업무 전반을 시스템화 하여 공유재산 취득, 분할·합병, 실태조사, 대부, 대부료 부과, 무단점유, 변상금, 매각, 이력관리
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 공유 재산의 현장 실태조사 업무를 지원할 수 있는 모바일 현장지원시스템 구현
                                </p>
                                <p style={{color:'#242525',fontSize:'20px', fontWeight:'400', textAlign:'left', padding:'0 0 0 100px'}}>
                                    · 위성사진 및 지적도 등의 필요정보와 조회기능을 제공하여 현장 실태조사, DB점검 등에 따른 업무부담 최소화
                                </p>
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
                                <Grid container style={{marginTop:'50px'}}>
                                    <Grid item lg={1.5}></Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>의사결정지원 시스템</p>
                                        <img src={land9} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>DB불일치 검축</p>
                                        <img src={land10} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <p style={{fontSize:'20px'}}>3D 지형 렌더링</p>
                                        <img src={land11} style={{width:'80%',marginBottom:'100px'}}/>
                                    </Grid>
                                    <Grid item lg={1.5}></Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Layout>
    )
}
export default Business4