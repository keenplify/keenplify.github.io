import styled from "styled-components";

export const Spacer = styled.div`
  margin-top: 4em;
`;

export const LanguageItem = styled.picture`
  &:hover:after {
    content: attr(alt);
    background-color: black;
    position: absolute;
    transform: translate(-50%, -100%);
    padding: 4px 8px;
    border-radius: 4px;
    z-index: 5;
    font-size: 1rem;
    color: yellow;
  }

  & > img {
    height: 18px;
    margin-right: 6px;
    filter: saturate(0) brightness(500%);

    &:hover {
      filter: none;
    }
  }
`;
