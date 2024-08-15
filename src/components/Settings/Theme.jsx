import { Switch } from 'antd';
import s from './Theme.module.css';

export const Theme = ({setTheme}) => {

    const onChange = (checked: boolean) => {
        setTheme(checked)
        console.log(`switch to ${checked}`);
      };

    return (
        <>
            <div className={s.themeContainer}>
                <span className={s.text}>Night theme</span>
                <Switch defaultChecked={JSON.parse(localStorage.getItem('darkTheme'))} onChange={onChange} />
            </div>
            
        </>
    )
}