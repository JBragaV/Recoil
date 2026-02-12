import styled from "@emotion/styled";

export const FilterWrapper = styled.form`
  margin-bottom: 22px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid #334155;
  background: #0F172A;
  color: #F1F5F9;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #3B82F6;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #94A3B8; /* cinza suave */
  letter-spacing: 0.3px;
`;