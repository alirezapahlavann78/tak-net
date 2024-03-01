"use client"
import PriceSlider from "@/components/SliderPrice/SliderPrice"
import Title from "@/components/sections/Title/Title"

import usePricePackage from "@/components/HomeClient/hook/usePricePackage"
const Home = () => {
  const {
    handleToggleChange,
    handlePackageChange,
    price,
    discount,
    showMonthlyPrice,
    packageCount,
  } = usePricePackage()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Title titleName="Price App" />
      <PriceSlider
        handleToggleChange={handleToggleChange}
        handlePackageChange={handlePackageChange}
        price={price}
        discount={discount}
        showMonthlyPrice={showMonthlyPrice}
        packageCount={packageCount}
      />
    </div>
  )
}

export default Home
