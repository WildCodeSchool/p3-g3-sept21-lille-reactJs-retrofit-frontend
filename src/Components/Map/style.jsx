import styled from 'styled-components';

const SContainerMap = styled.div`
  border: solid 1px var(--color--secondary);
  width: 50%;
  height: 90vh;
  margin-left: 20px;
  z-index: 0;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

export default SContainerMap;