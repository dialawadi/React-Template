import styled from "styled-components";

export const Drop = styled.div`
  padding: 50px 0;
  text-align: center;
`;
export const DropTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;

  @media (max-width: 575px) {
    font-size: 40px;
  }
`;

export const Span = styled.span`
  font-weight: normal;
`;

export const Form = styled.form`
  margin: auto;
  width: 70%;
  @media (max-width: 575px) {
    width: 90%;
  }
`;

export const FormInput = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`;
export const Input = styled.input`
  outline: none;
  padding: 5px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #eee;
  font-size: 20px;
  margin-top: 10px;
  width: ${props => props.sub ? '100%' : '49%'};

  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  background: #eee;
  border: none;
  padding: 10px;
  font-size: 20px;
`;
export const Submit = styled.input`
  width: fit-content;
  background: #eee;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 10px;
`;
