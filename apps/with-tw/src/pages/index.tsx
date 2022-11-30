import type { NextPage } from "next";

const Page: NextPage = () => (
  <>
    <div className="bg-black text-white min-h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center max-w-[85%]">
        <div className="">
          <div className="text-3xl lg:text-5xl">Chi vuole guardare Netflix ?</div>
        </div>
        <div className="mt-5 lg:mt-10">
          <div className="flex justify-center flex-wrap gap-2 lg:gap-6">
            {['Luke', 'Matt', "Jane", 'Sarah'].map((user_name, i) => (
              <div key={user_name} className="group relative flex flex-col gap-1 items-center text-gray-500 hover:text-gray-50">
                <a href="/browse" className="absolute inset-0" />
                <div className="w-[10vw] min-w-[84px] max-w-[200px] rounded-md overflow-hidden border-2 border-transparent group-hover:border-gray-50">
                  <SVGIcon icon={Avatars[i % Avatars.length]} />
                </div>
                <div className="text-sm">{user_name}</div>
              </div>
            ))}
            <div className="group relative flex flex-col gap-0 items-center text-gray-500 hover:text-gray-50">
              <div className="w-[10vw] min-w-[84px] max-w-[200px] rounded-md overflow-hidden group-hover:bg-gray-50 group-hover:text-gray-500">
                <a href="#" className="absolute inset-0" />
                <div className="p-5">
                  <SVGIcon icon={<AddIcon />} />
                </div>
              </div>
              <div className="text-sm">Aggiungi un profilo</div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="button" className="text-sm text-gray-500 border border-gray-500 px-5 py-2 hover:text-gray-50 hover:border-gray-50">Gestisci i profili</button>
        </div>
      </div>
    </div>
  </>
);

const SVGIcon = ({ icon }: { icon: React.ReactNode; }) => {
  const _id = "svg-icon-" + String(Math.random() + Math.random()).slice(0, 10).replaceAll('.', '');
  return (
    <>
      <style>
        {`
    .${_id} {
      width: 100%;
      height: auto;
    }
    .${_id} svg {
      width: 100%;
      height: auto;
    }
    `}
      </style>
      <div className={_id}>
        {icon}
      </div>
    </>
  );
};

const AddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" viewBox="0 0 120 120">
    <path fill-rule="evenodd" d="M60 119.226c32.834 0 59.452-26.618 59.452-59.452S92.834.323 60 .323.548 26.94.548 59.774 27.166 119.226 60 119.226ZM52.4 22h15.2v30.4H98v15.2H67.6V98H52.4V67.6H22V52.4h30.4V22Z" clip-rule="evenodd" />
  </svg>
);
const Avatars = [
  <>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Mary Baker</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#00c16c"></rect><rect x="0" y="0" width="36" height="36" transform="translate(4 4) rotate(340 18 18) scale(1.1)" fill="#002e34" rx="36"></rect><g transform="translate(-4 -1) rotate(0 18 18)"><path d="M15 20c2 1 4 1 6 0" stroke="#FFFFFF" fill="none" stroke-linecap="round"></path><rect x="14" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="20" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
  </>,
  <>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Alicia Dickerson</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#e9dfcc"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 7) rotate(37 18 18) scale(1.1)" fill="#cd5b51" rx="6"></rect><g transform="translate(3.5 3.5) rotate(-7 18 18)"><path d="M13,20 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
  </>,
  <>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Irene Morgan</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#ff548f"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-3 -3) rotate(87 18 18) scale(1)" fill="#be80ff" rx="36"></rect><g transform="translate(-7 -4) rotate(7 18 18)"><path d="M15 19c2 1 4 1 6 0" stroke="#000000" fill="none" stroke-linecap="round"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
  </>,
  <>
    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Fannie Lou</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#69d2e7"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 7) rotate(97 18 18) scale(1.1)" fill="#e0e4cc" rx="6"></rect><g transform="translate(3.5 3.5) rotate(-7 18 18)"><path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path><rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
  </>
];

export default Page;