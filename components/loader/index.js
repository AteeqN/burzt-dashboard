import styled from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgb(0, 0, 0);
  width: 100%;
  height: 100%;
  z-index: 50;
`;
const Spinner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid rgb(6, 69, 110);
  border-top: 6px solid #ffffff;
  animation: spin 2s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const Loader = () => {
  return (
    <StyledDiv>
      <Spinner />
    </StyledDiv>
  );
};
