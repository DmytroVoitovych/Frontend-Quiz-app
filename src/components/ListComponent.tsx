import { useEffect } from "react";
import { List, LableList } from "./ListComponent.styled";
import { useLocaleStorage } from "../customHooks/useLocaleStorage";

export const ListComponent = ({
  items,
  svg,
  setIndex,
  answer,
}: {
  items: string[];
  svg?: string[];
  setIndex: (index: number) => void;
  answer?: string;
}) => {
  const [checked, setChecked] = useLocaleStorage("checked");
  const [propsCame, setSignal,{update,remove}] = useLocaleStorage("signal");
  
  useEffect(()=>{
    if(!propsCame){
    remove(['checked']);
    update(setChecked);}},[]);

  useEffect(() => {
     if(!answer) update(setSignal);
    if (answer) setSignal(answer);
    const index: number = items.findIndex((e) => e === checked);
     if (checked && index !== -1) setIndex(index);
    
  }, [checked, items, setIndex, answer]);

  return (
    <List
      {...(propsCame ? { valid: propsCame === checked ? "green" : "red" } : {})}
      {...(propsCame ? { child: items.indexOf(propsCame) } : {})}
    >
      {items?.map((e, i) => (
        <li key={e}>
          <LableList
            {...(propsCame
              ? { valid: propsCame === checked ? "green" : "red" }
              : {})}
            svg={svg && svg[i]}
            htmlFor={e}
          >
            {e}
            <input
              tabIndex={0}
              value={e}
              type="radio"
              name={e}
              id={e}
              onChange={(el) => {
                el.stopPropagation();
                setChecked(e);
              }}
              checked={checked === e}
            />
          </LableList>
        </li>
      ))}
    </List>
  );
};
