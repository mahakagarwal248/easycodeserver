import Workingcontext from "./workingcontext";
import { toast } from "react-toastify";

const WorkingState = (props) => {
  const notworkingalert = () => {
    alert("website is in developoning state");
  };
  const customtoast = (msg, state) => {
    if (state === "success") {
      toast.success(msg);
    } else if (state === "info") {
      toast.info(msg);
    } else if (state === "warn") {
      toast.warn(msg);
    } else if (state === "error") {
      toast.error(msg);
    } else if (state === "default") {
      toast(msg);
    }
  };

  return (
    <Workingcontext.Provider value={{ notworkingalert, customtoast }}>
      {props.children}
    </Workingcontext.Provider>
  );
};
export default WorkingState;
