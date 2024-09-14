import React, { ReactNode } from 'react';

interface ShoppingCartCardProps {
  children: ReactNode;
}

export const ShoppingCartCard: React.FC<ShoppingCartCardProps> = ({ children }) => {
  return (
    <div className="p-[24px] border-[#EDEDED] w-full rounded-[16px]">
      {children}
    </div>
  );
};
