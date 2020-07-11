import style from './styles/navLayout.module.css';
export function NavBarLayout({children}){
    return (<div className={style.navLayout}>{children}</div>);
} 

