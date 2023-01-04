import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" alt="logo" />
    </header>
  )
}

export default Header;