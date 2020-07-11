
import style  from './styles/footer-layout.module.css';
export function Footer({children}){
    return (
        <div className={style.footerLayout}>{children}</div>
    );
}