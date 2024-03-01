"use client"

import { useState } from "react"
import Button from "@/components/Button/Button"
import Image from "next/image"
import active from "../../components/Svg/active.svg"
type Props = {
  handleToggleChange: () => void
  handlePackageChange: (e:any) => void
  price: number
  discount: number
  showMonthlyPrice: boolean
  packageCount: number
}
const SliderPrice = ({
  handleToggleChange,
  handlePackageChange,
  price,
  discount,
  showMonthlyPrice,
  packageCount,
}: Props) => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-[20%] top-[30%] h-96 w-52 rounded-full bg-fuchsia-600 blur-[150px]  md:w-96"></div>
      <div className="mt-12 flex w-64 w-full justify-center rounded-xl border border-white bg-white/30 backdrop-blur-md md:w-96">
        <div className=" w-full ">
          <div className="p-4">
            <p className="text-center text-sm uppercase text-gray-500 dark:text-white">
              <span>{packageCount}</span> pageviews
            </p>
            <div className="flex w-full flex-col items-center justify-center  pt-8">
              <input
                type="range"
                className="range"
                id="packageCount"
                min={1}
                max={100}
                value={packageCount}
                onChange={handlePackageChange}
              />
            </div>
            <div className="mt-6 flex justify-center ">
              <h3 className="text-2xl font-semibold  ">
                <span className="dark:text-white">
                  {" "}
                  ${showMonthlyPrice ? price : price * 12 * (1 - discount)}{" "}
                </span>
                <sub className="text-xs text-gray-700 ">/per monthly</sub>
              </h3>
            </div>
            <div className="flex flex-col justify-evenly gap-2 pt-4 md:flex-row">
              <div className="self-center">
                <span className="px-2 text-xs md:text-base dark:text-white">
                  Monthly Billing
                </span>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchChecked"
                  checked={showMonthlyPrice}
                  onChange={handleToggleChange}
                  defaultChecked
                />
              </div>
              <span className=" self-center text-xs md:text-base dark:text-white">
                Yearly Billing
                <span className="px-1s mx-2 rounded-full bg-orange-400/25 text-sm text-orange-700 sm:px-2">
                  -25%{" "}
                </span>
              </span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 p-4">
            <ul className="mt-6 flex flex-col items-center space-y-4">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-white">
                <Image src={active} alt="active" draggable="false" />
                100 Page Unlock
              </li>
              <li className="flex  items-center gap-2 text-sm text-gray-500 dark:text-white">
                <Image src={active} alt="active" draggable="false" />
                20 GB Storage
              </li>
              <li className="flex items-center  gap-2 text-sm text-gray-500 dark:text-white">
                <Image src={active} alt="active" draggable="false" />8 Team
                Members
              </li>
              <li className="flex items-center  gap-2 text-sm text-gray-500 dark:text-white">
                <Image src={active} alt="active" draggable="false" />
                Unlimited Book Mark
              </li>
              <li className="flex items-center  gap-2 text-sm text-gray-500 dark:text-white">
                <Image src={active} alt="active" draggable="false" />
                Unlimited basic feature
              </li>
            </ul>
            <Button
              variant="outlined"
              color="white"
              size="md"
              className={{ extra: "mt-3 w-full rounded-lg px-10 py-1" }}
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderPrice
