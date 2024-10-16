import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
    return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={classes.link}
        >
          {t("Main")}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
          className={classes.link}
        >
          {t("About us")} 
        </AppLink>
      </div>
    </div>
  );
}
