import { useDispatch, useSelector } from "react-redux";
import { selectCounterValue } from "./store/selectors";
import { incrementValue } from "./store/slice";

export const TestComponent = ({ componentId }: { componentId: string }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue(componentId));
  return (
    <div
      style={{ display: "flex" }}
      onClick={() => dispatch(incrementValue({ componentId }))}
    >
      <div>{componentId}</div>
      <div>{counterValue}</div>
    </div>
  );
};
