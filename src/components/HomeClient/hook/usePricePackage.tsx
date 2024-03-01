import { useState, useEffect, useMemo } from "react"

function usePricePackage() {
  const [packageCount, setPackageCount] = useState(1)
  const [showMonthlyPrice, setShowMonthlyPrice] = useState(true)
  const [price, setPrice] = useState(10) // default price
  const discount = 0.25 // 25% discount

  useMemo(() => {
    // Calculate price based on package count
    const calculatePrice = () => {
      const basePrice = 10 // Base price per package
      const totalPrice = basePrice * packageCount
      setPrice(totalPrice)
    }

    calculatePrice()
  }, [packageCount])

  const handlePackageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPackageCount(parseInt(event.target.value))
  }

  const handleToggleChange = () => {
    setShowMonthlyPrice(!showMonthlyPrice)
  }
  return { handleToggleChange, handlePackageChange, price, discount,showMonthlyPrice,packageCount }
}

export default usePricePackage
