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
  width: 300px;
  height: 300px;
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
`;

export const BtnStyle = styled.button`
  color: white;
  background: rgb(229, 121, 226);
  width: 8.5rem;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.9rem;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
`;

export const SecondaryBtn = styled.button`
  border-radius: 6px;
  font-size: 0.9rem;
  width: 8.5rem;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
  padding: 8px;
  border: 1px solid purple;
  color: purple;
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
`;

// Social Media link
export const ins = "https://www.instagram.com/thenavyowll/?igshid=ZDdkNTZiNTM";
export const fb = "https://www.facebook.com/profile.php?id=100077631759181";
