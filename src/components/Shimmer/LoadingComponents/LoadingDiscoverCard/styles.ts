import styled from 'styled-components';

export const Container = styled.div`
  max-width: 592px;
  min-height: 202px;

  padding: 1rem;
  gap: 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  justify-content: center;

  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 3px rgba(0, 0, 0, 0.05);

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: unset;
    align-items: center;
  }

  .image-skeleton {
    max-width: 272px;
    width: 100%;
    height: 100%;

    @media (max-width: 500px) {
      min-height: 162px;
    }
  }

  .row-container {
    width: 272px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 370px) {
      width: 240px;
    }
  }

  .row-skeleton {
    width: 100%;
    height: 16px;

    border-radius: 16px;

    margin-bottom: 12px;
  }
`;
