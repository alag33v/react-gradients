import styled from 'styled-components';

export const StyledHome = styled.div`
  .gradient-item__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin: 10px 0 25px;
    padding: 0;
  }

  .gradient-item {
    font-size: 20px;
    list-style: none;
    height: 100px;
    width: 800px;
    margin-bottom: 25px;
    position: relative;
    cursor: pointer;
  }

  .first-color {
    text-transform: lowercase;
    left: 10px;
    bottom: 0;
    transform: translateY(-50%);
    position: absolute;
  }

  .second-color {
    text-transform: lowercase;
    right: 10px;
    bottom: 0;
    transform: translateY(-50%);
    position: absolute;
  }

  .btn {
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgb(255, 255, 255);
    background-color: rgb(72, 48, 240);
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 0 auto 50px;
    width: 400px;
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

  .edit {
    fill: #ccc;
    width: 24px;
    height: 24px;
    top: 5px;
    right: 40px;
    position: absolute;
    transition: 0.3s;

    &:hover {
      fill: #fff;
    }
  }

  .delete {
    fill: #ccc;
    width: 30px;
    height: 30px;
    top: 2px;
    right: 5px;
    position: absolute;
    transition: 0.3s;

    &:hover {
      fill: #fff;
    }
  }
`;

export const GradientItem = styled.div`
  ${({ firstColor, secondColor }) =>
    `background: linear-gradient(90deg, ${firstColor} 0%, ${secondColor} 100%);`}
  border-radius: 5px;
  height: 100px;
  width: 800px;
`;
