import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { IPostFileResponse, postFile } from "@/APIS/index";
import Image0 from "../static/image_0.jpg";
import Image1 from "../static/image_1.jpg";
import Image2 from "../static/image_2.jpg";
import Image from "next/image";

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
    <div className=" h-5/6 w-1/2 flex flex-col justify-center items-center">
      <div className=" h-2/3 w-2/3 rounded-md border-dashed flex   items-center  m-10 flex-col border-black border relative z-10">
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
            <FontAwesomeIcon icon={faArrowUp} size="1x" />
          </i>
        </button>
        <div className=" absolute w-full h-1/4 bottom-10 text-center grid grid-cols-1 grid-rows-3 opacity-50 font-bold text-base">
          <p className=" ">Drag & Drop</p>
          <p className="   ">- or-</p>
          <p className="    text-blue-500">Choose image</p>
        </div>
      </div>
        <h1 className="text-center text-blue-500 text-xl font-bold">Sample submit</h1>
      <div className="h-1/3 w-5/6 flex justify-around items-center">
        <i className="hover:cursor-pointer hover:scale-110 hover:border-red-500 hover:border duration-300">
          <Image
            src={Image0}
            width={150}
            height={100}
            alt="Image"
            onClick={(e) => {
              fetch(e.currentTarget.src)
              .then(res => res.blob())
              .then(blob => {
                const file = new File([blob], 'image.png', blob)
                setFile(file);
                postFile(file).then((res) => {
                  setResult(res);
                });
              })
            }}
          />
        </i>
        <i className="hover:cursor-pointer hover:scale-110 hover:border-red-500 hover:border duration-300">
          <Image
            src={Image1}
            width={150}
            height={100}
            alt="Image"
            onClick={(e) => {
              fetch(e.currentTarget.src)
              .then(res => res.blob())
              .then(blob => {
                const file = new File([blob], 'image.png', blob)
                setFile(file);
                postFile(file).then((res) => {
                  setResult(res);
                });
              })
            }}
          />
        </i>
        <i className="hover:cursor-pointer hover:scale-110 hover:border-red-500 hover:border duration-300">
          <Image
            src={Image2}
            width={150}
            height={100}
            alt="Image"
            onClick={(e) => {
              fetch(e.currentTarget.src)
              .then(res => res.blob())
              .then(blob => {
                const file = new File([blob], 'image.png', blob)
                setFile(file);
                postFile(file).then((res) => {
                  setResult(res);
                });
              })
            }}
          />
        </i>
      </div>
    </div>
  );
};

export default FileUpload;
