import axios from './axios_instance'
import { toast } from "react-toastify"
import IResponse from "./respone"

interface IPostFileResponse extends IResponse {
    predicts: any
    process_time: number
    qrcode: string
    return: string | null
}

const postFile = async (file: File): Promise<IPostFileResponse | undefined> => {
    // console.log(file)
    if (!file) return undefined

    const formData = new FormData()
    formData.append('binary_file', file)
    const toastId = toast.loading('Đang xử lí...')
    try {
        const res = await axios.post<IPostFileResponse>('/predict_binary', formData)
        if (res.status != 200) {

            toast.update(toastId, { render: "Status code không đúng như kỳ vọng!", type: "error", isLoading: false, autoClose: 5000 })
            return
        }
        const data = res.data
        if (data.code != 1000) {
            console.log(data)
            toast.update(toastId, { render: 'Không thể xử lý dữ liệu trả về', type: "error", isLoading: false, autoClose: 5000 })
            return
        }

        toast.update(toastId, { render: 'Xử lý thành công', type: "success", isLoading: false, autoClose: 2000 })
        console.log(data)
        return data
    }
    catch (err) {
        console.log(err)
        toast.update(toastId, { render: 'Lỗi kết nối', type: "error", isLoading: false, autoClose: 2000 })
    }


}

export { postFile }
export type { IPostFileResponse }
