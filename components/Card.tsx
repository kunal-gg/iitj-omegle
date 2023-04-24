import React from 'react';
import { useState } from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState();
  return (
    <div className='flex justify-center flex-col items-center'>
      <h2 className='text-[#add7ff] text-xl'>{title}</h2>
      <p className='text-[#ffff]'>{content}</p>
    </div>
  );
};

export default Card;