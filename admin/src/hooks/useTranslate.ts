import { useCallback } from "react";
import locales from "../locales/en.json";

type Keys = keyof typeof locales;

function useTranslate() {
  const translate = useCallback((key: Keys) => {
    return locales[key];
  }, []);

  return translate;
}

export default useTranslate;
