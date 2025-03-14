"use client";

import { Button } from "@/shared/components/ui/button";
import MemoDownload from "@/shared/icons/download";
import { Page as CVPage, Document, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Page = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Niyaztay_Yelsultan_CV.pdf";
    link.click();
  };

  return (
    <main className="flex flex-col items-center space-y-4">
      <Button onClick={handleDownload} className="self-start">
        <MemoDownload className="size-5 mr-2 stroke-neutral-50" />
        Download CV
      </Button>
      <div className="max-h-[750px] overflow-y-hidden overflow-x-visible min-w-full rounded-lg shadow-lg">
        <Document file="/cv.pdf">
          <CVPage pageNumber={1} />
        </Document>
      </div>
    </main>
  );
};

export default Page;
