import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ColorContextProps {
  red: number;
  green: number;
  blue: number;
  setRed: (value: number) => void;
  setGreen: (value: number) => void;
  setBlue: (value: number) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) throw new Error;
  return context;
};

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  const contextValue = {
    red, green, blue, setRed, setGreen, setBlue
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
