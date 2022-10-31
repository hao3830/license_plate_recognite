import { useState, useEffect } from "react";
import { IPostFileResponse } from "@/APIS/index";
import FileUpload from "./file_input";
import Image from "next/image";

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
          <div className=" p-2 w-full h-1/6">Logo</div>
          <div className="flex w-full justify-around items-center h-5/6 ">
            <FileUpload setFile={setFile} setResult={setResult} />
            {file && (
              <div>
                {fileDataURL && result && (
                  <div className=" hover:scale-150 text-center">
                    <Image
                      src={fileDataURL}
                      width={300}
                      height={350}
                      alt={"Image Results"}
                    />
                    {result.predicts.ocr_predict[0].str} - {Math.round(result.predicts.ocr_predict[0].conf * 100) / 100}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
