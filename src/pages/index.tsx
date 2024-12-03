import { BrowserRouter } from 'react-router-dom'
import Router from '@modules/routes'
import {HelmetProvider} from "react-helmet-async";

const Main = () => {
	return (
		<BrowserRouter>
			<HelmetProvider>
				<Router />
			</HelmetProvider>
		</BrowserRouter>
	)
}

export default Main
