import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={classes.link}
        >
            Main
          </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
          className={classes.link}
        >
          About
        </AppLink>
      </div>
    </div>
  );
}
