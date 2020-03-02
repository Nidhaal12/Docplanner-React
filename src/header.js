import React from "react";

const Header = props => {
    return (
        <header>
            <div className="header-container">
                <img src={props.logo} width="20%" alt="logo" />
                <ul className="list" >
                    {props.list.map(el => (
                        <a
                            href={el.lien}
                            className="header-a"
                            id={el.colored ? el.colored : ""}
                        >
                            <li>
                                {el.item}
                                {el.sub && (
                                    <ul className="sub-menu"  >
                                        {el.sub.map(li => (
                                            <li className="li-sub"  >{li}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;