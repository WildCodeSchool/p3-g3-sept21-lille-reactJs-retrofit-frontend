import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100vw;
  padding-top: 81px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    font-weight: 100;
    margin: 30px 0 0 0;
    @media (max-width: 768px) {
      width: 80vw;
      font-size: 35px;
      padding-top: 50px;
      text-align: center;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 101;
    margin-bottom: 25px;
    @media (max-width: 768px) {
      width: 80vw;
      text-align: center;
      margin-bottom: 10px;
    }
  }
  button {
    width: 230px;
    height: 65px;
    cursor: pointer;
    font-size: 22px;
    padding: 20px;
    border-radius: 15px;
    margin: 20px;
    border: solid 2px var(--color--secondary);
    background-color: var(--color--thirdary);
    color: #000000;
    :hover {
      border: solid 2px var(--color--primary);
      background-color: var(--color--primary);
      color: white;
    }
  }
  p {
    text-align: start;
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0;
  input {
    width: 20vw;
    height: 40px;
    border-radius: 4px;
    border: solid 2px var(--color--primary);
    @media (max-width: 768px) {
      width: 70vw;
    }
  }
  input[type='text'] {
    font-size: 20px;
  }
  p {
    margin: 5px 0;
  }
  span.error {
    color: red;
    font-size: 20px;
  }
  span.success {
    color: green;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export { MainContainer, Input };
