import React from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  label?: string
}