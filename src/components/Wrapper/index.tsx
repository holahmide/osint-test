import { FC, ReactNode } from 'react';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-full max-w-8xl px-8 xl:px-3 mx-auto">{children}</div>;
};

export default Wrapper;
