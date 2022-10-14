import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"
import { PaystackButton } from "react-paystack"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50",
        {
          "text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white":
            variant === "primary",
          "text-gray-900 bg-transparent border-gray-920 hover:bg-gray-100":
            variant === "secondary",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

type PaystackButtonProps = {
  amount: number
  email: string
  publicKey: string
  currency: string
}

export const ThemedPaystackButton = ({
  amount,
  email,
  publicKey,
  currency,
}: PaystackButtonProps) => {
  return (
    <PaystackButton
      amount={amount}
      publicKey={publicKey}
      email={email}
      currency={currency.toUpperCase() === "GHS" ? "GHS" : "NGN"}
      text="Pay with Paystack"
      className={clsx(
        "w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50",
        "text-white bg-[#3bb75e] border-[#3bb75e] hover:bg-white hover:text-[#3bb75e] disabled:hover:bg-gray-900 disabled:hover:text-white"
      )}
    />
  )
}

export default Button
