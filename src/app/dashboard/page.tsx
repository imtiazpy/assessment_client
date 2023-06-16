import React from 'react';

interface IDashboard extends React.ComponentPropsWithoutRef<'div'> {

}

const Dashboard: React.FC<IDashboard> = () => {
  return (
    <div>
      Hello from Dashboard page
    </div>
  );
};

export default Dashboard;