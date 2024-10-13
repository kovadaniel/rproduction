import { classNames } from "shared/lib/classNames/classNames";
import classes from "./ThemeSwitcher.module.scss"
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { ThemeSwitcherProps } from "./ThemeSwitcher.types";
import { Button } from "widgets/Button";
import { ThemeButton } from "widgets/Button/ui/Button.types";

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(classes.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT
        ? <LightIcon width={32} height={12} />
        : <DarkIcon width={32} height={12} />}
    </Button>
  );
}
