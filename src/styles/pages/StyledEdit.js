import styled from 'styled-components';

export const StyledEdit = styled.div`
  position: relative;

  .input__wrapper {
    display: flex;
    justify-content: center;
    padding: 75px 0 50px;

    @media (max-width: 550px) {
      flex-direction: column;
      align-items: center;
    }
  }

  label {
    cursor: pointer;

    @media (max-width: 550px) {
      width: 100%;
    }

    span {
      font-size: 12px;
      display: block;
      margin: 0 0 4px 25px;

      @media (max-width: 550px) {
        text-align: center;
        margin: 0 0 4px;
      }
    }

    input {
      font-size: 16px;
      text-align: center;
      text-transform: lowercase;
      color: #000;
      background-color: #f2f2f2;
      border: none;
      border-radius: 5px;
      display: block;
      width: 300px;
      max-width: 100%;
      height: 40px;
      margin: 0 25px;
      padding: 0 15px;
      outline: none;
      cursor: pointer;

      @media (max-width: 750px) {
        width: 200px;
      }

      @media (max-width: 550px) {
        width: 100%;
        margin: 0 0 25px;
      }
    }
  }

  .error {
    font-size: 16px;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: tomato;
    margin-bottom: 10px;
  }

  .btn {
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgb(255, 255, 255);
    background-color: rgb(72, 48, 240);
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 15px;
    margin: 0 auto;
    width: 300px;
    max-width: 100%;
    display: block;
    transition: 0.3s;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: rgb(65 44 209);
    }

    &:active {
      background-color: rgb(47 26 191);
    }
  }

  .btn-disable {
    background-color: rgb(137 135 147);

    &:hover {
      background-color: rgb(118 117 122);
    }

    &:active {
      background-color: rgb(109 109 110);
    }
  }

  .back {
    fill: #ccc;
    width: 30px;
    height: 30px;
    top: 0;
    left: 0;
    position: absolute;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      fill: #fff;
    }
  }
`;
