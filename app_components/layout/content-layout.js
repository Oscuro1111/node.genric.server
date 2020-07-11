
import style from './styles/layout.module.css';

export  function ContentLayout({children}){
    return (
        <div className={style.contentBox}>
          {children}
        </div>
    );
}

export function MainBarLayout({children}){

    return (<div className={style.mainBar}>{children}</div>);
} 



export function SideBarLayout({children}){

    return (<div className={style.sideBar}>{children}</div>);
} 
