import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcherProps } from "./LangSwitcher.types";
import { Button, ThemeButton } from "shared/ui/Button";

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLanguge = () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguge}
    >
      {t("Language")}
    </Button>
  );
}
