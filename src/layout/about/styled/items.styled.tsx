import { styled } from 'styled-components';

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem 2rem;
`;

export const ItemWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  min-height: 20rem;
  max-height: 100%;
  height: 100%;
  border: 1px solid #272727;
  border-radius: 0.7rem;
  background: #111111cc;
  overflow: hidden;
`;

export const ItemHeader = styled.div`
  position: relative;
  flex: 0 0 17rem;
  width: 100%;
`;

export const ItemTitle = styled.h4`
  z-index: 1;
  margin: 0;
  padding: 0;
  background: transparent;
`;

interface ItemContentProps {
  $textAlign?: string;
}

export const ItemContent = styled.div<ItemContentProps>`
  text-align: ${({ $textAlign = 'center' }) => $textAlign};
  padding: 0.5rem 2rem 2rem;
  color: #bebebe;
  font-size: 1rem;
`;
