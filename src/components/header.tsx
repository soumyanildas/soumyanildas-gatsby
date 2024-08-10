import React from 'react';

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="container mx-auto px-4 py-6 xl:px-0 flex justify-between items-center ">
      <img width="60" height="60" src="/images/logo-cyan.svg" alt="logo-cyan" />
      {children}
    </header>
  );
};

export default Header;


type Props = {
  children?: React.ReactNode
};