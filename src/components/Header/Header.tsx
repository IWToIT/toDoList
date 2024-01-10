import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="header">
      <h1 className="header__title">6 января 2024г.</h1>
      <div className="header__container">
        <div className="header__profile">EM</div>
        <div className="header__addToDo">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
