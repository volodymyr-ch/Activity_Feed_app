import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.li`
  position: relative;

  .delete-icon {
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover {
    .delete-icon {
      opacity: 1;
    }
  }
`;

export const Timestamp = styled.span`
  position: absolute;
  top: 24px;
  left: -90px;
  font-size: 12px;
  color: #999;
`;

export const IconStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #999;
  z-index: 1;
  cursor: pointer;
`;

export const Icon = styled.span`
  position: absolute;

  top: 16px;
  left: -52px;
  background-color: #fff;
  ${IconStyles}
`;

export const DeleteIcon = styled.span`
  background-color: #00c6ed;
  ${IconStyles}
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.span`
  display: block;
  margin-bottom: 4px;
`;

export const Description = styled.span`
  display: block;
  font-size: 14px;
  color: gray;
`;

export const Name = styled.span`
  color: #00c6ed;
  font-weight: bold;
`;
