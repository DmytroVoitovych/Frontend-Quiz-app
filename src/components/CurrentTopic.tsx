import { useEffect, useState } from "react";
import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import {
  forceUpdate,
  questionsNameTopic,
  RESTART_EVENT,
  starterSvgPath,
  STORAGE_TOPIC,
} from "../utilles/constants";
import { DecorH } from "./CurrentTopic.styled";

let trigger: number = 0;

export const CurrentTopic = () => {
  const [topic] = useLocaleStorage(STORAGE_TOPIC);
  const [num, setNum] = useState<number>();

  forceUpdate.force = (top: string) => {
    trigger = +top;
    window.dispatchEvent(new Event(RESTART_EVENT));
  };

  useEffect(() => {
    const topicTrigger = () => {
      setNum(trigger);
    };

    window.addEventListener(RESTART_EVENT, topicTrigger);

    return () => {
      window.removeEventListener(RESTART_EVENT, topicTrigger);
    };
  }, []);

  return (
    <DecorH
      svg={starterSvgPath[num ?? +topic]}
      bgIndex={num ?? +topic}
      className="decorTopic"
    >
      {questionsNameTopic[num ?? +topic]}
    </DecorH>
  );
};
