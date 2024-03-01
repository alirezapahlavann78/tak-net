"use client"

import { Types } from "@/types/types";

type Props = {
  titleName: string;
};

function Title({  titleName }: Props) {
  return (
    <div className=" p-2 rounded-lg flex">
      <span className="text-lg  self-center dark:text-white text-gray-700"> {titleName} </span>
    </div>
  );
}

export default Title;
