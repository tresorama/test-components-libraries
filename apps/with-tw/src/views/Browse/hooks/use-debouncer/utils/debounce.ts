export const debouncer = <F extends () => void>({ time }: {
  time: number;
}) => {
  let timer: number | NodeJS.Timer;
  return {
    add: (newFunc: F) => {
      clearTimeout(timer);
      timer = setTimeout(newFunc, time);
    },
    clear: () => clearTimeout(timer)
  };
};

// Demo
/*
const _ = debouncer({ time: 200 });
_.add(() => console.log('A'));
_.add(() => console.log('AA'));
_.add(() => console.log('AAA'));
_.add(() => console.log('AAAA'));
// output => 'AAAA'
*/