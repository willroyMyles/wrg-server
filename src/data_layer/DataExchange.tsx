import {action} from "mobx"
import {sendCreatePost} from "../api_layer/Api_version_1"

class Store {
	@action sendCreatePostData = (data: any) => {
		return new Promise((resolve) => {
			sendCreatePost(data)
				.then((res) => {
					if (res) resolve(true)
				})
				.catch((err) => {
					resolve(false)
				})
		})
	}
}

const dataExchanger = new Store()
export default dataExchanger

//should consider using useSWR here to fetch and load data
