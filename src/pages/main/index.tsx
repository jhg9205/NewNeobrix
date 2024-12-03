import Layout from '@components/layouts/layout'

import { Intro2 } from '@pages/main/intro2'
import {Intro} from "@pages/main/intro";
import {Intro3} from "@pages/main/intro3";
import {Intro4} from "@pages/main/intro4";
import {Helmet} from "react-helmet-async";
import React from "react";

const Main = () => {
	return (
		<Layout main={true}>
			<Helmet>
				<title>네오브릭스 - SI&SOLUTION</title>
			</Helmet>
			<section>
				<Intro />
			</section>
			<section>
				<Intro3/>
			</section>
			<section>
				<Intro2/>
			</section>
			<section>
				<Intro4/>
			</section>
		</Layout>
	)
}

export default Main
