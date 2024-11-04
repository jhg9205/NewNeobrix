import { useEffect, useRef } from 'react'
import logo from '@images/common/logoN-black-mini.png'
import { Card, CardContent, CardMedia, Divider, Grid, Paper, styled } from '@mui/material'
import Transition from '@components/ui/transition/transition'
import TransitionFade from '@components/ui/transition/transitionFade'
import { getViewSize } from '@utils/functions'
import img1 from '@images/main/map_img1.png'
import img2 from '@images/main/map_img2.png'
import img3 from '@images/main/map_img3.png'
import * as React from 'react'

export const Location = (props: { isMenu?: boolean }) => {
	let threshold: number[] = []

	if (props.isMenu) {
		threshold = [-1, -1, -1]
	} else {
		switch (getViewSize()) {
			case 'lg':
				threshold = [15, 19, 23]
				break
			case 'md':
				threshold = [17, 19, 22]
				break
			case 'sm':
				threshold = [22, 24, 28]
				break
		}
	}

	const mapElement = useRef(null)

	useEffect(() => {
		// @ts-ignore
		const { naver } = window
		if (!mapElement.current || !naver) return

		const location = new naver.maps.LatLng(37.510128, 127.080915)
		// @ts-ignore
		const mapOptions: naver.maps.MapOptions = {
			center: location,
			zoom: 17
		}
		const Map = new naver.maps.Map(mapElement.current, mapOptions)
		new naver.maps.Marker({
			position: location,
			map: Map,
			icon: logo
		})
	}, [])

	return (
		<div className="location">
			<div className={'location-container'}>
				<Transition threshold={threshold[0]} direction={'up'}>
					<TransitionFade threshold={threshold[0]}>
						<div>
							<div style={props.isMenu ? { display: 'none' } : {}} className={'menu_title_p_fixed_warp'}>
								<p className="menu_title_p1">LOCATION</p>
								<Divider sx={{ margin: '20px auto', backgroundColor: 'rgb(0 0 0 / 69%)', width: '200px' }} />
							</div>
							<Card variant="outlined" id="location-contact" sx={{ borderColor: 'rgba(0,0,0,0.12)' }}>
								<div>
									<p>Contact</p>
								</div>
								<div id="location-text-title">
									<ul>
										<li>
											<span>주소</span>
											<span>서울특별시 송파구 백제고분로7길 16-9 ,4층 401호(잠실동, 한신빌딩)</span>
										</li>
										<li>
											<span>이메일</span>
											<span>neobrix@neobrix.co.kr</span>
										</li>
										<li>
											<span>전화</span>
											<span>02-423-7860</span>
										</li>
										<li>
											<span>팩스</span>
											<span>0508-903-7860</span>
										</li>
									</ul>
								</div>
							</Card>
						</div>
					</TransitionFade>
				</Transition>
				<Transition threshold={threshold[1]} direction={'up'}>
					<TransitionFade threshold={threshold[1]}>
						<div ref={mapElement} id="map" />
					</TransitionFade>
				</Transition>
				<Transition threshold={threshold[2]} direction={'up'}>
					<TransitionFade threshold={threshold[2]}>
						<Grid container spacing={{ xs: 1, md: 1, lg: 5 }} direction="row" justifyContent="center" alignItems="center">
							<Grid item xs={12} md={4} lg={4} sx={{ borderRadius: '0' }}>
								<Card variant="outlined">
									<CardMedia>
										<img src={img1} />
										<span className="fwb">차량</span>
									</CardMedia>
									<CardContent>
										<ul>
											<li>
												<b>수서IC</b> {'=>'} '종합운동장사거리' 방면
											</li>
											<li>'우리은행건물 우회전 {'=>'}</li>
											<li>'정담옥건물 좌회전 {'=>'}</li>
											<li>
												<b>한신빌딩</b>
											</li>
										</ul>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={4} lg={4}>
								<Card variant="outlined" sx={{ borderRadius: '0' }}>
									<CardMedia>
										<img src={img2} />
										<span className="fwb">지하철</span>
									</CardMedia>
									<CardContent>
										<ul>
											<li style={{ color: '#263C96', fontWeight: 'bold' }}>9호선 종합운동장역</li>
											<br />
											<li>9번 출구에서 도보 6분</li>
										</ul>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={4} lg={4}>
								<Card variant="outlined" sx={{ borderRadius: '0' }}>
									<CardMedia>
										<img src={img3} />
										<span className="fwb">버스</span>
									</CardMedia>
									<CardContent>
										<ul>
											<li style={{ color: '#48966a' }}>
												<b>마을버스</b>
											</li>
											<li style={{ color: '#48966a' }}>350 | 301 | 333 | 341 | 3342</li>
											<li style={{ color: '#00AEAB' }}>
												<b>일반버스</b>
											</li>
											<li style={{ color: '#00AEAB' }}>3314번 | 3417번 | 4318번</li>
											<li style={{ color: '#ff581d' }}>
												<b>직행좌석</b>
											</li>
											<li style={{ color: '#ff581d' }}>6900</li>
										</ul>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</TransitionFade>
				</Transition>
			</div>

			{/*<span className="main-title">LOCATION</span>*/}
		</div>
	)
}
