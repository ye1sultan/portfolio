"use client";

import { Page as CVPage, Document, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Page = () => {
  return (
    <main className="max-h-[750px] overflow-y-hidden overflow-x-visible min-w-full">
      <Document file="/cv.pdf">
        <CVPage pageNumber={1} pageIndex={0} />
      </Document>
    </main>
  );
};

export default Page;
