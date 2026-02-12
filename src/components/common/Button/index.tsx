'use client'

import React, { type ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  className?: string
  loading?: boolean
  variant?: 'outline' | 'primary' | 'cart' | 'services'
  icon?: React.ReactElement
  iconPosition?: 'left' | 'right'
}

export const Button = ({
  title,
  className = '',
  loading = false,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  ...rest
}: IButton): React.ReactElement => {
  const baseStyles =
    ' justify-center transition-all duration-300 cursor-pointer inline-flex gap-2 items-center hover:text-primary'

  const variantStyles = {
    outline:
      'text-[20px] font-semibold bg-white text-primary px-2 py-3 rounded-[20px] w-[200px] ',
    primary:
      ' text-[20px] font-semibold bg-primary text-white px-2 py-3 rounded-[20px] w-[200px] hover:bg-white hover:text-primary',
    cart: 'rounded-full bg-primary-100 text-secondary-500 hover:text-primary hover:bg-white hover:border hover:border-primary-500 hover:text-primary-500',
    services: ' border-2 border-primary-500 text-primary-500 rounded-full ',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={loading}
      {...rest}
    >
      {icon && iconPosition === 'left' && <span className="text-white text-[18px]">{icon}</span>}
      {!loading ? title : 'Loading...'}
      {icon && iconPosition === 'right' && <span className="text-white text-[18px]">{icon}</span>}
    </button>
  )
}
