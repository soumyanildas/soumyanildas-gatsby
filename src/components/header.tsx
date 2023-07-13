import React from 'react';

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="container mx-auto px-4 py-6 xl:px-0 flex justify-between items-center">
      <h1 className="text-alizarin font-bold text-5xl">sd.</h1>
      {children}
    </header>
  );
};

export default Header;


type Props = {
  children?: React.ReactNode
};