import { Link, Outlet } from 'react-router-dom';
import './Nabvar.css';

import { useState } from 'react';

const iconsNavbar = [
  {
    title: 'Home',
    img: (
      <svg
        width='67'
        height='67'
        viewBox='0 0 67 67'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M60.0042 16.0158L40.856 2.61872C35.6368 -1.03806 27.6252 -0.838596 22.6055 3.05088L5.95057 16.049C2.62623 18.642 0 23.961 0 28.1495V51.0874C0 59.5645 6.88138 66.4791 15.3584 66.4791H51.1947C59.6718 66.4791 66.5532 59.5977 66.5532 51.1207V28.5816C66.5532 24.0939 63.661 18.5755 60.0042 16.0158ZM35.7698 53.1818C35.7698 54.5447 34.6395 55.675 33.2765 55.675C31.9136 55.675 30.7833 54.5447 30.7833 53.1818V43.2087C30.7833 41.8458 31.9136 40.7155 33.2765 40.7155C34.6395 40.7155 35.7698 41.8458 35.7698 43.2087V53.1818Z'
          fill='white'
        />
      </svg>
    ),
  },
  {
    title: 'Subjects',
    img: (
      <svg
        width='67'
        height='63'
        viewBox='0 0 67 63'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.4'
          d='M33.275 8.77658V62.1163C32.7093 62.1163 32.1104 62.0164 31.6445 61.7502L31.5114 61.6837C25.1226 58.1898 13.9755 54.5296 6.75483 53.5646L5.78985 53.4315C2.59545 53.0322 0 50.0375 0 46.8431V6.64698C0 2.68726 3.22767 -0.30749 7.1874 0.0252597C14.1751 0.590935 24.7566 4.11809 30.6796 7.81161L31.5114 8.31073C32.0106 8.61021 32.6428 8.77658 33.275 8.77658Z'
          fill='white'
        />
        <path
          d='M66.55 6.68044V46.8433C66.55 50.0377 63.9546 53.0324 60.7602 53.4317L59.6621 53.5648C52.4082 54.5298 41.2278 58.2233 34.839 61.7505C34.4064 62.0167 33.874 62.1165 33.275 62.1165V8.77676C33.9072 8.77676 34.5395 8.61038 35.0386 8.31091L35.6043 7.94489C41.5272 4.21809 52.142 0.657661 59.1297 0.0587108H59.3293C63.2891 -0.274039 66.55 2.68744 66.55 6.68044Z'
          fill='white'
        />
        <path
          d='M19.1333 21.8871H11.6464C10.2821 21.8871 9.15076 20.7558 9.15076 19.3915C9.15076 18.0272 10.2821 16.8959 11.6464 16.8959H19.1333C20.4975 16.8959 21.6289 18.0272 21.6289 19.3915C21.6289 20.7558 20.4975 21.8871 19.1333 21.8871Z'
          fill='white'
        />
        <path
          d='M21.6289 31.8697H11.6464C10.2821 31.8697 9.15076 30.7383 9.15076 29.374C9.15076 28.0098 10.2821 26.8784 11.6464 26.8784H21.6289C22.9932 26.8784 24.1245 28.0098 24.1245 29.374C24.1245 30.7383 22.9932 31.8697 21.6289 31.8697Z'
          fill='white'
        />
      </svg>
    ),
  },
];

function Nabvar() {
  const [open, isOpen] = useState(false);

  function openNavbar() {
    isOpen(true);
  }

  function closeNavbar() {
    isOpen(false);
  }

  return (
    <section className='containerAll'>
      <section
        style={{ width: open ? '250px' : '70px' }}
        className='containerNabvar'
        onMouseOver={openNavbar}
        onFocus={openNavbar}
        onMouseOut={closeNavbar}
        onBlur={closeNavbar}
      >
        {iconsNavbar.map((element) => (
          <Link key={element.title} to={`/${element.title.toLowerCase()}`}>
            <button
              type='button'
              className={open ? 'openNavbar' : 'closeNavbar'}
            >
              {element.img}
              <h1>{element.title}</h1>
            </button>
          </Link>
        ))}
      </section>
      <Outlet />
    </section>
  );
}

export default Nabvar;
