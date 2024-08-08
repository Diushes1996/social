import { Switch } from 'antd';
import { useState } from 'react';
import s from './Settings.module.css';

export const Theme = () => {

    const [theme, setTheme] = useState(true)

    const onChange = (checked: boolean) => {
        setTheme(checked)
        console.log(`switch to ${checked}`);
      };

    return (
        <>
            <div className={`${s.themeContainer} ${theme === true ? s.dark : s.light}`}>
                <span className={s.text}>Night theme</span>
                <Switch defaultChecked onChange={onChange} />
            </div>
            
        </>
    )
}