import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Form = styled.form`
  position: relative;
  margin: 16px 16px 0 16px;
  padding: 20px;
  display: flex;
  background-color: #f6f6f6;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;

  &:focus {
    border: 1px solid #52c7b4;
    outline: none;
  }
`;

export const ButtonsBlock = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 24px;
  left: -52px;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #999;
  z-index: 1;
`;

export const Radio = styled.input`
  display: none;
`;

export const LabelIcon = styled.label<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-right: 4px;
  background-color: ${(props) => (props.isActive ? '#00c6ed' : '#fff')};

  &:hover {
    background-color: #00c6ed;
  }
`;

export const LabelsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
`;

export const Btn = styled.button`
  background-color: #52c7b4;
  color: #fff;
  border: none;
  padding: 8px 16px;

  &:hover {
    background-color: #57c5b5;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
  }
`;
