import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .header-left__wrapper {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #eee;
  }

  h2 {
    font-size: 30px;

    @media (max-width: 400px) {
      font-size: 24px;
    }
  }

  .victory {
    margin-left: 10px;
    width: 28px;
    height: 28px;
  }

  .circle {
    fill: black;
    animation: infinite-spinning 5s linear infinite;
  }

  @keyframes infinite-spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
