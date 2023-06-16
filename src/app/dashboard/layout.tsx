import React from 'react';

interface IDashboardLayout extends React.ComponentPropsWithoutRef<'div'> {

}

const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
  return (
    <div>
      <h1>Hello From dashboard layout</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;