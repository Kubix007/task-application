import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.div`
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  min-width: 200px;

  & > .title {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    border-bottom: 0.5px solid #808080;
    font-size: 15.43px;
    font-family: FiraSans-Light;
    text-align: left;
  }

  & > .body {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20%;
    padding: 10px 0px 10px 0px;
  }

  & > .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    min-height: 50px;

    @media all and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const TitleCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  & > .titleCloseButton {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ModalButtonConfirm = styled.button`
  border: 1px solid #24399b;
  border-radius: 12px;
  opacity: 1;
  font-family: FiraSans-SemiBold;
  background-color: #24399b;
  color: white;
  width: 123px;
  margin: 1rem 1rem;
  padding: 10px;
  font-size: 1rem;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const ModalButtonCancel = styled.button`
  border: 1px solid #24399b;
  border-radius: 12px;
  font-family: FiraSans-SemiBold;
  background-color: white;
  color: black;
  padding: 10px;
  width: 123px;
  margin: 1rem 1rem;
  font-size: 1rem;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const ModalFormParagraph = styled.p`
  font-family: FiraSans-Light;
  font-size: FiraSans-Light;
`;

export const ModelButtonsContainer = styled.div`
  display: flex;
`;

export const ModelCloseButton = styled.button`
  border: none;
  background: none;
`;
