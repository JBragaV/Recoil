import styled from "@emotion/styled";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-radius: 14px;
  border: 1px solid #334155;
  margin-bottom: 12px;

  background: ${({ feita }) =>
    feita ? "#162033" : "#1E293B"};

  opacity: ${({ feita }) => (feita ? 0.7 : 1)};

  transition: all 0.25s ease;

  &:hover {
    background: ${({ feita }) =>
      feita ? "#1A2638" : "#334155"};
  }
`;

export const TaskText = styled.span`
  flex: 1;
  margin-left: 12px;
  font-size: 16px;
  font-weight: 500;

  color: ${({ feita }) =>
    feita ? "#94A3B8" : "#F1F5F9"};

  text-decoration: ${({ feita }) =>
    feita ? "line-through" : "none"};

  transition: all 0.25s ease;
`;

export const RemoveButton = styled.button`
  background: #EF4444;
  border: none;
  color: white;

  padding: 8px 14px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  transition: all 0.2s ease;

  &:hover {
    background: #DC2626;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.97);
  }
`;
