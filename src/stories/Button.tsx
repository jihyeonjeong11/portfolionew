import React from 'react';


interface ButtonProps {

  children?: React.ReactNode;
  type?: string;
  onClick?: () => void;
  classes?: string;


}

// export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (

export const Button = ({children = <div>button</div>, type='button', onClick=()=>null, classes=''}: ButtonProps) => {
  if (type === "primary") {
      return (
          <button
              onClick={onClick}
              type="button"
              className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg text-white bg-black transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 ${classes}` }
          >
              {children}
          </button>
      );
  }
  return (
      <button
          onClick={onClick}
          type="button"
          className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100  tablet:first:ml-0 ${classes}`}
      >
          {children}
      </button>
  );
};

export default Button;
