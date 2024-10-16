import { useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Sidebar.module.scss"
import { SidebarProps } from "./Sidebar.types";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ThemeButton } from "shared/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);
  
  return (
    <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
      <Button onClick={onToggle} >{collapsed ? t("Expand") :  t("Shrink")}</Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
