import * as React from "react";

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 4v16m0-16l6 6m-6-6l-6 6"
        className="stroke-current"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoArrow = React.memo(Arrow);
export default MemoArrow;
