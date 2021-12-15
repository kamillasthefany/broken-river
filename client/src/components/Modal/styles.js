import styled from 'styled-components';
import { Modal as ModalMUI } from "@material-ui/core";
import { Container as ContainerMUI } from "@material-ui/core";

export const Modal = styled(ModalMUI)`
  && {
  color: black;
  /* border: 1px solid red; */
  width: 500;
  height: 550;
    /* background-color: #A6A6A6; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
    
  }
`;

export const Container = styled(ContainerMUI)`
  && {
  width: 500;
    height: 550;
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Form = styled.form`
  && {
  padding: 10px;
  }
`;

