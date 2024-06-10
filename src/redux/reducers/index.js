import { combineReducers } from "redux";
import friends from "./friend";
import user from "./user";
import Expences from './expense';
import Expencesummary from './expenceSummary';
import theme from './theme';
export default combineReducers({
  friends,
  user,
  Expences,
  Expencesummary,
  theme
});
