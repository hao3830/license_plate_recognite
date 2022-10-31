import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'
import { IPostFileResponse, postFile } from '@/APIS/index'

const FileUpload = ({
  setFile,
  setResult,
}: {
  setFile: (v: File) => void
  setResult: (v: IPostFileResponse | undefined) => void
}) => {
  const uploadHandler = async (f: FileList | null) => {
    if (!f) {
      toast.error('Please select a file')
      return
    }
    const file = f[0]
    setFile(file)
    postFile(file).then((res) => {
      setResult(res)
    })
  }

  return (
    <div className=" h-full w-1/4 rounded-md border-dashed bg-gray-200  items-center mr-5 flex-col border-black border relative z-10">
      <div className=" justify-center  h-3/6 relative m-5 flex items-center border border-gray-500   rounded-full">
        <input
          type="file"
          name="myImage"
          className=" relative opacity-0 w-full h-full"
          onChange={(e) => {
            e.preventDefault()
            uploadHandler(e.target.files)
          }}
        ></input>
        <button className=" absolute z-10">
          <i>
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </i>
        </button>
      </div>
      <div className=" absolute w-full h-1/4 bottom-10 text-center grid grid-cols-1 grid-rows-3  font-bold text-lg">
        <p className=" ">Drag & Drop</p>
        <p className="   "> or </p>
        <p className="    text-blue-500">Choose image</p>
      </div>
    </div>
  )
}

export default FileUpload
