import { useState, useEffect } from "react";
import { IPostFileResponse } from "@/APIS/index";
import FileUpload from "./file_input";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import UITLogo from '../static/uit_icon.png';

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);
  const [result, setResult] = useState<IPostFileResponse | undefined>(
    undefined
  );

  useEffect(() => {
    if (!file) return;

    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      setFileDataURL(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  return (
    <div className=" w-screen h-screen bg-gray-200 justify-center items-center flex">
      <div className=" w-11/12 h-5/6 bg-white rounded-2xl shadow-lg drop-shadow-xl shadow-slate-400 relative  justify-center items-center">
        <div className="flex flex-col h-5/6 w-full duration-300">
          <div className=" relative p-2 w-full h-1/6 flex justify-center items-center">
            <div className=" absolute left-5 top-1">
              <Image
                src={UITLogo}
                width={100}
                height={100}
                alt={"UIT logo"}
              />
            </div>
            <h1 className=" text-3xl font-bold text-blue-500">
              LICENSE PLATE RECOGNITION DEMO
            </h1>
          </div>
          <div className="flex w-full justify-around items-center h-5/6 ">
            <FileUpload setFile={setFile} setResult={setResult} />
            {file ? (
                fileDataURL && result && (
                  <div className=" h-5/6 w-1/2 rounded-md border-dashed flex justify-center items-center   m-10 flex-col border-black border relative z-10 text-center">
                    <div className=" absolute top-0 left-0 p-2 border opacity-70 flex justify-around items-center w-1/6">
                      <FontAwesomeIcon icon={faImage} size="1x" />
                      Output
                    </div>
                    <span>
                      <img src={fileDataURL} alt={"Image Results"} />
                    </span>
                    {result.predicts.ocr_predict[0].str} -{" "}
                    {Math.round(result.predicts.ocr_predict[0].conf * 100)}%
                  </div>
                )
            ) : (
              <div className=" h-5/6 w-1/2 rounded-md border-dashed flex justify-center items-center   m-10 flex-col border-black border relative z-10">
                <div className=" absolute top-0 left-0 p-2 border opacity-70 flex justify-around items-center w-1/6">
                  <FontAwesomeIcon icon={faImage} size="1x" />
                  Output
                </div>
                <i className=" opacity-50">
                  <FontAwesomeIcon icon={faImage} size="10x" />
                </i>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
