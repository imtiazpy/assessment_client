import React from 'react';

interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {

}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div>
      <h1>This is Primary layout</h1>

      {children}
    </div>
  );
};

export default PrimaryLayout;