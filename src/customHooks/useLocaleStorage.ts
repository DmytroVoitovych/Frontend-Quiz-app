import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const useLocaleStorage = (
  key: string,
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] => {
  const [data, setData] = useState<string>(
    window?.localStorage?.getItem(key) || initialValue
  );

  useEffect(() => {
    if (!window?.localStorage) return;
    window.localStorage.setItem(key, data);
  }, [data, key]);

  return [data, setData];
};
