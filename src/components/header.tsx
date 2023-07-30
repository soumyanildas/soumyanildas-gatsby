import React from 'react';

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="container mx-auto px-4 py-6 xl:px-0 flex justify-between items-center selection:bg-cyan-700 selection:text-white">
      <img width="70" height="70" src="/images/logo-cyan.svg" alt="logo-cyan" />
      {children}
    </header>
  );
};

export default Header;


type Props = {
  children?: React.ReactNode
};