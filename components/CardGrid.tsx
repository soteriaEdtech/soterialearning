import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ children, columns = 3 }: CardGridProps) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 gap-6 ${gridCols[columns]}`}>
      {children}
    </div>
  );
}