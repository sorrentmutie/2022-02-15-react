import { useState } from "react";
import cn from 'classnames';
import { MenuProps } from "../models/MenuItem";

export const Menu: React.FC<MenuProps> = (props) => {
    const [opened, setOpened] =  useState(false);
    const toggle = () => {setOpened(!opened)};
    // const cls = opened ? 'navbar-brand App-male': 'navbar-brand';
    const cls = cn('navbar-brand', { 'App-male': opened });
    console.log('render: ' + cls);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <div className={cls} 
        onClick={toggle}
        onMouseOver={() => setOpened(true)}
        onMouseOut={() => setOpened(false)}
    >Navbar</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        {
            props.items.map( (menuItem) => {
                return (
                    <li key={menuItem.key} className="nav-item" onClick={() => props.onItemClicked(menuItem.url)}>
                        <div className="nav-link">
                         {menuItem.text}
                         </div>
                    </li>
                )
            })
        }
      </ul>
    </div>
  </div>
</nav>
    )
}