import React, { FC, useState } from 'react';
import Popup from '../Popup/Popup';

const Header: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const [currentDate] = useState(new Date());
  const month = new Intl.DateTimeFormat('ru', { month: 'long' }).format(currentDate);
  const year = new Intl.DateTimeFormat('ru', { year: 'numeric' }).format(currentDate);
  const formattedDate = `${month}${' '}${year}`;
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="header">
      <h1 className="header__title">{formattedDate}</h1>
      <div className="header__container">
        <div className="header__profile">EM</div>
        <button className="btn header__addToDo" onClick={handleOpenPopup}>
          <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z"
                fillRule="evenodd"
              ></path>{' '}
            </g>
          </svg>
        </button>
      </div>
      {isPopupOpen && (
        <Popup month={month} year={year} isOpen={isPopupOpen} openPopup={handleOpenPopup} closePopup={handleClosePopup} />
      )}
    </div>
  );
};

export default Header;
