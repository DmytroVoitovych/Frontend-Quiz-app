import { useEffect } from "react";
import { List, LableList } from "./ListComponent.styled";
import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import { forceUpdate, STORAGE_CHECKED, STORAGE_SIGNAL } from "../utilles/constants";
import { AnimatePresence, motion } from "motion/react";
import { ListInner } from "../types";
import { getAnimateOptions } from "../utilles/getAnimateOptions";

export const ListComponent = ({ items, svg, setIndex, answer }: ListInner) => {
  const [checked, setChecked] = useLocaleStorage(STORAGE_CHECKED);
  const [propsCame, setSignal, { update, remove }] =
    useLocaleStorage(STORAGE_SIGNAL);

  useEffect(() => {
    if (!propsCame) {
      remove([STORAGE_CHECKED]);
      update(setChecked);
    }
  }, []);

  useEffect(() => {
    if (!answer) update(setSignal);
    if (answer) setSignal(answer);
  }, [answer, setSignal, update]);

  useEffect(() => {
    const index: number = items.findIndex((e) => e === checked);
    if (checked && index !== -1) setIndex(index);
  }, [checked, items, setIndex]);

  return (
    <List
      {...(propsCame ? { valid: propsCame === checked ? "green" : "red" } : {})}
      {...(propsCame ? { child: items.indexOf(propsCame) } : {})}
    >
      <AnimatePresence mode="popLayout">
        {items?.map((e, i) => (
          <motion.li key={e} {...getAnimateOptions(!svg)}>
            <LableList
              {...(propsCame
                ? { valid: propsCame === checked ? "green" : "red" }
                : {})}
              svg={svg && svg[i]}
              htmlFor={e}
            >
              {e}
              <input
                className="visually-hidden"
                tabIndex={0}
                value={e}
                type="radio"
                name={e}
                id={e}
                onChange={(el) => {
                  el.stopPropagation();
                  setChecked(e);
                  if (svg) forceUpdate.force(items.indexOf(e).toString());
                }}
                checked={checked === e}
              />
            </LableList>
          </motion.li>
        ))}
      </AnimatePresence>
    </List>
  );
};
