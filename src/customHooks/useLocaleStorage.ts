import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type StorageReturn = [string, Dispatch<SetStateAction<string>>,{
  remove:(key: string[]) => false | void,
  update:(callback: Dispatch<SetStateAction<string>>) => void, 
}];

export const useLocaleStorage = (
  key: string,
  initialValue?: string
):StorageReturn => {
  const [data, setData] = useState<string>(
    window?.localStorage?.getItem(key) || initialValue || ""
  );

  useEffect(() => {
    if (!window?.localStorage || data === "") return;
    window.localStorage.setItem(key, data);
     }, [data, key, initialValue]);


  const remove = (key:string[])=> key.forEach(e=> window.localStorage.getItem(e) !== null  && window.localStorage.removeItem(e)); 
  const update = (callback: Dispatch<SetStateAction<string>>)=> 
    window.localStorage.getItem(key) !== null?
  callback(window.localStorage.getItem(key) as string):
  callback(""); 

  return [data, setData,{remove,update}];
};
