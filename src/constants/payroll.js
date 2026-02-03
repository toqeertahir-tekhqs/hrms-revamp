const conditionBasedOnOption = [
    { value: 1, label: 'Always True' },
    { value: 2, label: 'Range' },
    { value: 3, label: 'Pay Input' },
];

const percentageBasedOnOption = [
    { value: 1, label: 'Wage' },
    { value: 2, label: 'Rule' },
];

const rangeBasedOnOption = [
    { value: 1, label: 'Wage' },
    { value: 2, label: 'Rule' },
];
const payCategoryTypes = [
    { label: 'Basic', value: 1 },
    { label: 'Allowance', value: 2 },
    { label: 'Gross', value: 3 },
    { label: 'Deduction', value: 4 },
    { label: 'Net', value: 5 },
];
const payCategoryTypesBottomSectionShow = {
    1: false,
    2: true,
    3: false,
    4: true,
    5: false,
}

export { conditionBasedOnOption, payCategoryTypesBottomSectionShow, percentageBasedOnOption, rangeBasedOnOption };

