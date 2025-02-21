import {
  LightsWrapper,
  PanelsWrapper,
  ServerLight,
  ServerPanel,
  ServerRackBackground,
  ServerRackWrapper,
  ServerWrapper,
} from '../styled/backend/server.styled';

function Server(): React.ReactNode {
  return (
    <ServerWrapper>
      <PanelsWrapper>
        <ServerPanel />
        <ServerPanel />
        <ServerPanel />
        <ServerPanel />
        <ServerPanel />
      </PanelsWrapper>
      <LightsWrapper>
        <ServerLight />
        <ServerLight />
      </LightsWrapper>
    </ServerWrapper>
  );
}

export default function ServerRack(): React.ReactNode {
  return (
    <ServerRackBackground>
      <ServerRackWrapper>
        <Server />
        <Server />
        <Server />
        <Server />
        <Server />
      </ServerRackWrapper>
    </ServerRackBackground>
  );
}
