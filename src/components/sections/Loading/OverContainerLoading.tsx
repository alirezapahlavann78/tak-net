import React from "react";
import Loading from "@/components/sections/Loading/Loading";


type Props = {
  loading: boolean
}

function OverContainerLoading({loading}: Props) {
  return (
    <div className={`flex items-center justify-center absolute inset-0 w-full h-full bg-black/50 duration-200 ${loading ? '' : 'opacity-0 pointer-events-none'}`}>
      <Loading />
    </div>
  );
}

export default OverContainerLoading