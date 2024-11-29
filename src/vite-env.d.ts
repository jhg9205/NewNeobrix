/// <reference types="vite/client" />
/* ******************* 환경변수 ******************* */
interface ImportMetaEnv {
	readonly VITE_APP_IMGS: string
	readonly VITE_APP_LOCAL_IMGS: string
	readonly VITE_EMAIL_PUB_KEY: string
	readonly VITE_EMAIL_PRI_KEY: string
	readonly VITE_EMAIL_SERVICE_ID: string
	readonly VITE_EMAIL_TEMP_ID: string
}
