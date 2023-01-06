import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'umi';
import { useChangeTheme } from '@/hooks';
import { navList } from '@/constant/mockData';
import type { IObject } from '@/constant/interface';
import styles from './index.less';

const MeunList: React.FC = () => {
  const { setTheme: setThemes } = useChangeTheme();
  const [language, setLanguage] = useState('中文');
  const [theme, setTheme] = useState('暗色');

  useEffect(() => {
    const preTheme = localStorage.getItem('theme');
    if (preTheme === 'theme-dark') {
      setTheme('亮色');
    }
  }, []);

  // 切换多语言
  const changeLanguage = () => {
    if (language === '中文') {
      setLanguage('英文');
    } else {
      setLanguage('中文');
    }
  };

  // 切换主题色
  const changeTheme = () => {
    if (theme === '暗色') {
      setThemes('theme-dark');
      setTheme('亮色');
    } else {
      setThemes('theme-light');
      setTheme('暗色');
    }
  };

  return (
    <div className={`${styles.nav} df aic jcsb p12`}>
      <Link className={styles.logo} to="/">
        logo
      </Link>
      <div className="df aic">
        {navList.map((item: IObject) => (
          <NavLink className="m012" key={item.path} to={item.path}>
            {item.name}
          </NavLink>
        ))}
        <div className={`m012 ${styles.checked}`} onClick={changeLanguage}>
          {language}
        </div>
        <div className={`m012 ${styles.checked}`} onClick={changeTheme}>
          {theme}
        </div>
        <div className='m012'>
          <Avatar size="small" icon={<UserOutlined />} />
          <div>登录</div>
        </div>
      </div>
    </div>
  );
};

export default MeunList;
