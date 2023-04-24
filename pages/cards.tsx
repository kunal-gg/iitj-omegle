import { useState } from 'react';
import Card from '../components/Card';
import cards from './api/cards';

const Home: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevCard = () => {
     if(currentCardIndex > 0 ) {
        setCurrentCardIndex(currentCardIndex - 1);
     }
  };

  return (
    <main className='w-screen h-screen bg-[#212b42] flex justify-center items-center'>
      <p className='absolute top-0 mt-4 mx-auto text-white'>{currentCardIndex+1} of 3</p>
      <div className='w-64 min-h-fit min-w-fit flex flex-col justify-center align-middle border border-gray-200 rounded-lg p-4'>
        {cards[currentCardIndex] && ( 
          <Card
            title={cards[currentCardIndex].title}
            content={cards[currentCardIndex].content}
          />
        )}
        <div className='flex justify-between mt-4'>
          <button type="button" className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={handlePrevCard}>Prev</button>
          <button type="button" className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={handleNextCard}>Next</button>
        </div>
        <div>
        </div> 
      </div>
    </main>
);


};

export default Home;