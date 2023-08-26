import { FunctionComponent, ReactNode } from 'react';

interface P extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button: FunctionComponent<P> = (buttonProps) =>
  (
    <button {...buttonProps}/>
  )
