import data from "../data.json";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import accesibility from "../assets/images/icon-accessibility.svg";

const questionsNameTopic: string[] = data.quizzes.map((e) => e.title);
const starterSvgPath: string[] = [html, css, js, accesibility];
const forceUpdate: { force: (finish: string) => void } = { force: () => {} };
const questionAmounts = (num: number): number => data.quizzes[num].questions.length;

//List of storage key
const STORAGE_TOPIC = "topic";
const STORAGE_RESULT = "result";
const STORAGE_ANSWERS = "answers";
const STORAGE_CHECKED = "checked";
const STORAGE_SIGNAL = "signal";
const STORAGE_QUESTION = "question";
const STORAGE_SHOW = "show";
const STORAGE_SCORE = "score";
const STORAGE_THEME = "theme";
//custom event
const RESTART_EVENT = "playAgain";

export {
  questionsNameTopic,
  starterSvgPath,
  forceUpdate,
  questionAmounts,
  STORAGE_TOPIC,
  RESTART_EVENT,
  STORAGE_RESULT,
  STORAGE_ANSWERS,
  STORAGE_CHECKED,
  STORAGE_SIGNAL,
  STORAGE_QUESTION,
  STORAGE_SHOW,
  STORAGE_SCORE,
  STORAGE_THEME,
};
