import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 22px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid #334155;
  background: #0F172A;
  color: #F1F5F9;
  font-size: 16px;

  &::placeholder {
    color: #64748B;
  }

  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59,130,246,0.3);
  }
`;

export const Button = styled.button`
  padding: 12px 18px;
  border-radius: 14px;
  border: none;
  background: #3B82F6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #2563EB;
  }
`;
