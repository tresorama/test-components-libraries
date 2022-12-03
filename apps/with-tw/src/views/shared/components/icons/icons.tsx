import { SVGIcon } from "./SVGIcon";

export const AddIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" viewBox="0 0 120 120">
        <path fillRule="evenodd" d="M60 119.226c32.834 0 59.452-26.618 59.452-59.452S92.834.323 60 .323.548 26.94.548 59.774 27.166 119.226 60 119.226ZM52.4 22h15.2v30.4H98v15.2H67.6V98H52.4V67.6H22V52.4h30.4V22Z" clip-rule="evenodd" />
      </svg>
    }
  />
);

export const AvatarIcons = [
  <>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Mary Baker</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#00c16c"></rect><rect x="0" y="0" width="36" height="36" transform="translate(4 4) rotate(340 18 18) scale(1.1)" fill="#002e34" rx="36"></rect><g transform="translate(-4 -1) rotate(0 18 18)"><path d="M15 20c2 1 4 1 6 0" stroke="#FFFFFF" fill="none" strokeLinecap="round"></path><rect x="14" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="20" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
  </>,
  <>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Alicia Dickerson</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#e9dfcc"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 7) rotate(37 18 18) scale(1.1)" fill="#cd5b51" rx="6"></rect><g transform="translate(3.5 3.5) rotate(-7 18 18)"><path d="M13,20 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
  </>,
  <>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Irene Morgan</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#ff548f"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-3 -3) rotate(87 18 18) scale(1)" fill="#be80ff" rx="36"></rect><g transform="translate(-7 -4) rotate(7 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="#000000" fill="none" strokeLinecap="round"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
  </>,
  <>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Fannie Lou</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#69d2e7"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 7) rotate(97 18 18) scale(1.1)" fill="#e0e4cc" rx="6"></rect><g transform="translate(3.5 3.5) rotate(-7 18 18)"><path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
  </>
].map(svg => {
  return function Icon() {
    return <SVGIcon icon={svg} />;
  };
});

export const NetflixIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="302" height="82" fill="none" viewBox="0 0 302 82">
        <g clipPath="url(#a)">
          <path fill="#D81F26" d="M41.526 76.356c-4.543.798-9.166 1.037-13.948 1.674L12.992 35.31v44.554C8.449 80.342 4.304 80.98 0 81.617V0h12.115l16.578 46.309V0h12.833v76.356ZM66.633 29.89c4.942 0 12.514-.239 17.057-.239v12.752c-5.66 0-12.275 0-17.057.24v18.97c7.492-.479 14.985-1.117 22.556-1.356V72.53l-35.31 2.79V0h35.31v12.753H66.633v17.136Zm69.98-17.136h-13.231v58.662c-4.304 0-8.608 0-12.752.16V12.752H97.4V0h39.214l-.001 12.753Zm20.723 16.26h17.456v12.752h-17.456v28.933h-12.514V0h35.629v12.753h-23.115v16.26Zm43.838 30.526c7.253.16 14.585.718 21.679 1.116v12.593c-11.397-.718-22.795-1.434-34.432-1.674V0h12.753v59.54Zm32.439 14.586c4.065.24 8.369.479 12.514.956V0h-12.514v74.125ZM302 0l-16.18 38.816L302 81.617c-4.783-.637-9.565-1.514-14.347-2.311l-9.166-23.592-9.324 21.68c-4.624-.798-9.088-1.038-13.71-1.675l16.419-37.381L257.047 0h13.708l8.369 21.44L288.052 0H302Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h302v81.617H0z" />
          </clipPath>
        </defs>
      </svg>
    }
  />
);

export const BellIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="m3.119 16.428-.808-.59.808.59Zm1.308-3.855-1-.012v.012h1Zm.028-2.331 1 .011v-.011h-1Zm16.433 6.205.82-.574-.82.574Zm-1.259-3.874-1-.013v.013h1Zm.028-2.216 1 .013v-.013h-1ZM9.604 19.833a1 1 0 1 0-1.208 1.594l1.208-1.594Zm6 1.594a1 1 0 1 0-1.208-1.594l1.208 1.594ZM3.926 17.018c.752-1.029 1.501-2.567 1.501-4.445h-2c0 1.339-.536 2.472-1.116 3.265l1.615 1.18Zm1.501-4.434.028-2.33-2-.024-.028 2.33 2 .024Zm16.28 3.289c-.555-.792-1.078-1.938-1.078-3.3h-2c0 1.877.718 3.417 1.44 4.448l1.638-1.148Zm-1.078-3.288.027-2.215-2-.025-.027 2.215 2 .025Zm.028-2.228c0-4.91-3.84-8.957-8.657-8.957v2c3.64 0 6.657 3.078 6.657 6.957h2Zm-.227 8.17c.78 0 1.25-.565 1.434-1.013.185-.453.223-1.099-.157-1.641L20.07 17.02a.363.363 0 0 1-.069-.185.178.178 0 0 1 .013-.08.305.305 0 0 1 .093-.117.519.519 0 0 1 .324-.112v2ZM5.455 10.242C5.455 6.426 8.42 3.4 12 3.4v-2c-4.755 0-8.545 3.995-8.545 8.842h2ZM3.57 16.527a.52.52 0 0 1 .328.115c.061.05.083.097.09.114a.168.168 0 0 1 .01.076.364.364 0 0 1-.073.186l-1.615-1.18c-.397.543-.362 1.2-.18 1.656.178.45.648 1.033 1.44 1.033v-2Zm16.859 0H3.571v2H20.43v-2ZM12 20.6c-.942 0-1.78-.3-2.396-.767l-1.208 1.594c.976.74 2.241 1.173 3.604 1.173v-2Zm2.396-.767c-.616.467-1.454.767-2.396.767v2c1.363 0 2.628-.433 3.604-1.173l-1.208-1.594Z" />
      </svg>
    }
  />
);

export const SearchIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="transparent" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M14.927 15.04 18.4 18.4m-1.12-8.96a7.84 7.84 0 1 1-15.68 0 7.84 7.84 0 0 1 15.68 0Z" />
      </svg>
    }
  />
);

export const PlayIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.144 10.866c1.405.813 1.41 1.834 0 2.753l-10.9 7.623c-1.37.758-2.3.31-2.397-1.33L4.8 3.958C4.77 2.447 5.97 2.02 7.113 2.744l11.03 8.122Z" />
      </svg>
    }
  />
);

export const InfoIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V6.2m0 8.358v.042m9.6-3.6a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0Z" />
      </svg>
    }
  />
);

export const CheckIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16.8 8.4-7.16 7.2-2.44-2.454" />
      </svg>
    }
  />
);

export const PlusIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12.5 7.2v9.6m4.8-4.8H7.7" />
      </svg>
    }
  />
);
export const ChevronDownIcon = () => (
  <SVGIcon
    icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.8 9.6 12 14.4 7.2 9.6" />
      </svg>
    }
  />
);
