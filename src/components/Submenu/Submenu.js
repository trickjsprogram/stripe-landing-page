import React, { useState, useRef, useEffect } from "react";
import "./Submenu.css";
import { useGlobalContext } from "../../context";

const Submenu = () => {
  const {
    isSubMenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-3");
    }
  }, [page, location, links]);

  return (
    <aside
      className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links &&
            links.map((link, index) => {
              const { url, icon, label } = link;
              return (
                <a key={index} href={url}>
                  {icon}
                  {label}
                </a>
              );
            })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
