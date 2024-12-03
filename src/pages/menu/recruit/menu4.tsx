import recruit0 from "@images/menu/recruit0.jpg";
import recruit1 from "@images/menu/recruit1.jpg";
import recruit2 from "@images/menu/recruit2.jpg";
import recruit3 from "@images/menu/recruit3.jpg";
import recruit4 from "@images/menu/recruit4.jpg";
import recruit5 from "@images/menu/recruit5.jpg";
import recruit6 from "@images/menu/recruit1.jpg";
import recruit7 from "@images/menu/recruit0.jpg";
import recruit8 from "@images/menu/recruit8.png";
import recruit9 from "@images/menu/recruit5.jpg";
import {Card, Divider, Grid} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import {motion} from "framer-motion";
import Layout from "@components/layouts/layout";
import {useNavigate} from "react-router-dom";
import {getViewSize} from "@utils/functions";

const Menu4 = () =>{
    const navigate = useNavigate();
    const style: {} = {
        width: '100%',
        minHeight: '800px',
        textAlign: 'center'
    }
    const data = [
        { title: '장기근속포상', content: '장기근속 직원에게 포상휴가와 휴가비를 지원합니다.' },
        { title: '경조사 유급휴가', content: '직원의 경조사(신혼여행, 장례식 등)에 휴가를 부여합니다.' },
        { title: '(야근시)석식비, 교통비 제공', content: '부득이하게 야근을 할 경우 석식과 교통비를 지원합니다.' },
        { title: '사무실 다과 제공', content: '직원을 위한 간식을 제공합니다.' },
        {
            title: '도서비 지원',
            content: '개발이나 자기계발에 필요한 도서 구입 시 도서비를 지원해 업무에 도움이 되도록 노력하고 있습니다.'
        },
        { title: '자격증 수당 제공', content: '신규 자격증(기사, 산업기사) 취득시 축하금을 제공합니다.' },
        { title: '파견 상주비 지원', content: '3개월 이상 지방 파견시 숙소 보증금, 숙소 월세, 공과금 및 파견지원비를 지급합니다.' },
        { title: '지인추천제', content: '신규입사자로 지인을 추천할 경우 1년 만근 시 소정의 포상금을 지급합니다.' },
        { title: '자율출퇴근제', content: '8~10시 출근 시간에 따른 퇴근으로 워라벨을 보장합니다.' },
        { title: '실손보험 가입', content: '직원 단체보험 "실손 의료보험"을 제공합니다.' }
    ]
    const img = [recruit0, recruit1, recruit2, recruit3, recruit4, recruit5, recruit6, recruit7,recruit8,recruit9]


    return (
        <Layout>
            {getViewSize()=='lg'?
                <>
                    <div className='menu-header'>
                        <div style={{fontSize:'60px', fontWeight:'600'}}>
                            복리후생
                        </div>
                        <div style={{fontSize:'20px',fontWeight:'400',margin:'20px 0 50px 0'}}>
                            <span>네오브릭스의 복리후생</span>
                        </div>
                    </div>
                    <Divider/>
                    <div className='menu-flow'>
                        <HomeIcon onClick={()=>{navigate('/')}}/>
                        <p>&gt; 인재채용 &gt; </p><span>복리후생</span>
                    </div>
                </>:
                <Grid container>
                    <Grid item sm={8} className='menu-header-mobile'>
                        <div className='menu-flow-mobile'>
                            <HomeIcon onClick={()=>{navigate('/')}}/>
                            <span> · 인재채용 · 복리후생</span>
                        </div>
                        <div className='menu-sub-mobile'>
                            <p>복리후생</p>
                        </div>
                    </Grid>
                    <Grid item sm={4} className='menu-bg-mobile'>

                    </Grid>
                </Grid>
            }
            <Divider/>
            <div className="menu_title_contain" style={style}>
                {getViewSize()=='lg'?
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
                        <div className='intro-dream'>
                            <p className='intro-dream-title'>Neobrix는 임직원의 업무 효율성과 행복을 위해 노력합니다.</p>
                            <p className='intro-dream-sub'>Neobrix는 임직원의 업무 효율을 높이고 삼의 질을 향상시키기 위해 다양한 영역에서 복리후생 제도를 운영하고 있습니다.
                            임직원의 의견을 적극 반영하여 복리후생은 계속하여 발전시켜 나갈 것입니다.</p>
                        </div>
                    </motion.div>:
                    <></>
                }
                {/*컨텐츠 div*/}
                <Grid container style={{ paddingBottom: '100px', width: '70%', margin: '0 auto' }} id="welfare">
                    {data.map((cont, index) => (
                        <Grid item lg={6} md={6} sm={12} key={index} style={{ padding: '30px' }}>
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
                                style={{height: '100%'}}
                            >
                                <Card variant="outlined" style={{ height: '100%' }}>
                                    <div className="welfare-img">
                                        <img src={img[index]} alt="복리후생" style={{ verticalAlign: 'middle' }} />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <p style={{ fontSize: '20px', fontWeight: 'bold' }} className="welfare-title">
                                            {cont.title}
                                        </p>
                                        <p className="welfare-content">{cont.content}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout>

    )
}
export default Menu4