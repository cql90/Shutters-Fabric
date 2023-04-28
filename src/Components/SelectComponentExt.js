import React, { forwardRef } from "react"
import styled from "@emotion/styled";

const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 0.2rem;
`;

const SelectComponentExt = forwardRef((props, ref) => {
  const {label, options, selectchange} = props;
  const selectChange = (e) => {
    selectchange(e)
  }
  
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...props} onChange={selectChange} ref={ref}>
        <option value=''>Select...</option>
      {options.map((x, y) => <option value={x.value} key={y}>{x.name}</option>)}</StyledSelect>
    </>
  );
});

export default SelectComponentExt