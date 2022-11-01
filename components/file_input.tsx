import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { IPostFileResponse, postFile } from "@/APIS/index";

const FileUpload = ({
  setFile,
  setResult,
}: {
  setFile: (v: File) => void;
  setResult: (v: IPostFileResponse | undefined) => void;
}) => {
  const uploadHandler = async (f: FileList | null) => {
    if (!f) {
      toast.error("Please select a file");
      return;
    }
    const file = f[0];
    setFile(file);
    postFile(file).then((res) => {
      setResult(res);
    });
  };

  return (
    <div className=" h-5/6 w-1/2 rounded-md border-dashed flex   items-center  m-10 flex-col border-black border relative z-10">
        <input
          type="file"
          name="myImage"
          className=" absolute opacity-0 hover:cursor-pointer z-10 w-full h-full"
          onChange={(e) => {
            e.preventDefault();
            uploadHandler(e.target.files);
          }}
        />
        <button className=" opacity-50 relative top-1/3">
          <i>
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
          </i>
        </button>
      <div className=" absolute w-full h-1/4 bottom-10 text-center grid grid-cols-1 grid-rows-3 opacity-50 font-bold text-lg">
        <p className=" ">Drag & Drop</p>
        <p className="   "> - or- </p>
        <p className="    text-blue-500">Choose image</p>
      </div>
    </div>
  );
};

export default FileUpload;
