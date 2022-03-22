import React, { ReactNode } from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  label?: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'black' | 'white' | 'transparent'
}