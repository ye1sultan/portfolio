import * as React from "react";

function Download(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20 15v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3m4-4l4 4m0 0l4-4m-4 4V3"
        stroke="stroke-current"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoDownload = React.memo(Download);
export default MemoDownload;
