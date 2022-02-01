// import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
// import { parseCookies } from 'nookies'
import { ApiRequestMethod, HttpResponse } from './services.types'

const LOCALHOST = 'http://fisk-restrita.w51.agency/api'

export const makeRequest =
	(method: ApiRequestMethod) =>
		async <T>(
			endpoint: string,
			// ctx?: GetServerSidePropsContext,
			// accessToken?: string,
			data?: Object,
		): Promise<HttpResponse<T>> => {
			// const { access_token: token } = parseCookies(ctx)

			const response = await fetch(
				`${LOCALHOST}${endpoint}`,
				{
					method,
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'application/json',
						'Accept': 'application/json, text/plain, */*',
						// 'Authorization': `Bearer ${token || accessToken}`,
					},
					body: JSON.stringify(data),
				},
			)

			const responseData = await response.json();
			console.log(responseData)
			if (response.status < 200 || response.status > 299) throw new Error(responseData.code);

			return responseData;
		}

// export const uploudFile = async<T>(endpoint: string, data: any): Promise<HttpResponse<T>> => {
// 	const { access_token: token } = parseCookies()

// 	try {
// 		const res = await axios.post(`${STAGING_BASE_URL}${endpoint}`, data, {
// 			headers: {
// 				Authorization: `Bearer ${token}`
// 			}
// 		})
// 		return res.data
// 	} catch (error) {
// 		if (error.response.status === 422) {
// 			throw new Error(error.response.data.code)
// 		}
// 		return error
// 	}
// }

export const postRequest = makeRequest('POST');
export const getRequest = makeRequest('GET');
export const deleteRequest = makeRequest('DELETE');
export const patchRequest = makeRequest('PATCH');
