import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select, { SingleValue, ActionMeta, PropsValue } from 'react-select';

const CategorySelector = ({
  options,
  onChange,
  targetValue,
}: CategorySelectorPropType) => {
  const [value, setValue] = useState<object | null>(null);

  useEffect(() => {
    if (!targetValue) return;
    if (targetValue?.value === '') {
      setValue(null);
    } else {
      setValue(targetValue);
    }
  }, [targetValue]);

  return (
    <Select
      options={options}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: '#EEEDEC',
          height: '42px',
          marginBottom: '10px',
        }),
        valueContainer: (baseStyles, state) => ({
          ...baseStyles,
          height: '42px',
        }),
        input: (baseStyles, state) => ({
          ...baseStyles,
          height: '42px',
        }),
        indicatorSeparator: (baseStyles, state) => ({
          ...baseStyles,
          display: 'none',
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          display: 'relative',
          top: '42px',
        }),
      }}
      placeholder="카테고리를 선택하세요"
      onChange={onChange}
      value={value}
    />
  );
};

type OptionObject = {
  value: string;
  label: string;
};

type CategorySelectorPropType = {
  options: object[];
  onChange: (
    newValue: SingleValue<object>,
    actionMeta: ActionMeta<object>
  ) => void;
  targetValue: OptionObject;
};

export default CategorySelector;
