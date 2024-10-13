import { useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Sidebar.module.scss"
import { SidebarProps } from "./Sidebar.types";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);
  
  return (
    <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle} >Toggle</button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
