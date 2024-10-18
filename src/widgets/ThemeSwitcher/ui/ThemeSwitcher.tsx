import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { ThemeSwitcherProps } from "./ThemeSwitcher.types";
import { Button, ThemeButton } from "shared/ui/Button";


export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT
        ? <LightIcon width={32} height={12} />
        : <DarkIcon width={32} height={12} />}
    </Button>
  );
}
