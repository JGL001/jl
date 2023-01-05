import { useCallback } from 'react';

const useChangeTheme = () => {
  // 获取当前主题
  const preTheme = localStorage.getItem('theme');

  // 初始化主题
  const initTheme = useCallback(() => {
    if (preTheme) {
      document.getElementsByTagName('body')[0].className = preTheme;
    } else {
      localStorage.setItem('theme', 'theme-light');
      document.getElementsByTagName('body')[0].className = 'theme-light';
    }
  }, [preTheme]);

  // 修改主题
  const setTheme = useCallback(
    (t: string) => {
      if (preTheme !== t) {
        localStorage.setItem('theme', t);
        document.getElementsByTagName('body')[0].className = t;
      }
    },
    [preTheme],
  );

  return { initTheme, setTheme };
};

export default useChangeTheme;
