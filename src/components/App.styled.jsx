import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  .body {
    color: $primary-text-color;
    font-family: Roboto, sans-serif;
    letter-spacing: 0.03em;
    font-size: 14px;
    line-height: 1.71;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  img {
    display: block;
  }
  textarea {
    resize: none;
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .link {
    text-decoration: none;
  }
`;
