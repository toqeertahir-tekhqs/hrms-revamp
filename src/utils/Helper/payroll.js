import { conditionBasedOnOption } from '../constants/payroll';

const getConditionBasedOnLabel = (value) =>
  conditionBasedOnOption?.find((x) => x?.value == value)?.label;

export { getConditionBasedOnLabel };
