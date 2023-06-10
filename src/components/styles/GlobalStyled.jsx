import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  filter: blur(2.8rem);
  overflow-x: clip;
`;

export const Background = styled.div`
  position: relative;
  z-index: -5;
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 50%;
  background: hsla(302, 82%, 76%, 1);
  background: linear-gradient(
    90deg,
    hsla(302, 82%, 76%, 1) 0%,
    hsla(258, 40%, 68%, 1) 100%
  );
  background: -moz-linear-gradient(
    90deg,
    hsla(302, 82%, 76%, 1) 0%,
    hsla(258, 40%, 68%, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    hsla(302, 82%, 76%, 1) 0%,
    hsla(258, 40%, 68%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f492f0", endColorstr="#a18dce", GradientType=1 );

  @media (max-width: 428px) {
    width: 280px;
    height: 280px;
  }
`;

export const BtnStyle = styled.button`
  color: white;
  background: rgb(229, 121, 226);
  width: 8.5rem;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.9rem;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 834px) {
    padding: 6px;
    font-size: 0.85rem;
    width: 7.8rem;
  }

  @media (max-width: 428px) {
    padding: 7px;
    font-size: 0.8rem;
    width: 7.3rem;
  }

  @media (max-width: 393px) {
    width: 7.5rem;
    padding: 6.5px;
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    width: 7.3rem;
    padding: 6px;
    font-size: 0.75rem;
  }

  @media (max-width: 320px) {
    width: 7.5rem;
    font-size: 0.7rem;
  }
`;

export const SecondaryBtn = styled.button`
  border-radius: 6px;
  font-size: 0.9rem;
  width: 8.5rem;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
  padding: 8px;
  border: 1px solid purple;
  color: purple;

  @media (max-width: 834px) {
    width: 7.8rem;
    padding: 6px;
    font-size: 0.85rem;
  }

  @media (max-width: 428px) {
    padding: 7px;
    font-size: 0.8rem;
    width: 7.3rem;
  }

  @media (max-width: 393px) {
    width: 7.5rem;
    padding: 6.5px;
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    width: 7.3rem;
    padding: 7px;
    font-size: 0.75rem;
  }

  @media (max-width: 320px) {
    width: 7.5rem;
    font-size: 0.7rem;
  }
`;

export const CubeStyle = styled.img`
  cursor: pointer;
  transition: width 0.3s;
  width: 2.3rem;
  animation: floating 5s ease-in-out infinite;
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
  &:hover {
    width: 2.6rem;
  }

  @media (max-width: 834px) {
    width: 2rem;
    &:hover {
      width: 2.4rem;
    }
  }

  @media (max-width: 428px) {
    width: 2rem;

    &:hover {
      width: 2.4rem;
    }
  }

  @media (max-width: 362px) {
    width: 1.9rem;
    &:hover {
      width: 2.3rem;
    }
  }
`;

// Social Media link
export const ins = "https://www.instagram.com/thenavyowll/?igshid=ZDdkNTZiNTM";
export const fb = "https://www.facebook.com/profile.php?id=100077631759181";
