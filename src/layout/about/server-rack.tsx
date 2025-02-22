import {
  LightsWrapper,
  PanelsWrapper,
  ServerLight,
  ServerPanel,
  ServerRackBackground,
  ServerRackWrapper,
  ServerWrapper,
} from './styled/server.styled';

function Server(): React.ReactNode {
  return (
    <ServerWrapper>
      <PanelsWrapper>
        {Array.from({ length: 5 }).map((_, i) => (
          <ServerPanel key={i} />
        ))}
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
        {Array.from({ length: 5 }).map((_, i) => (
          <Server key={i} />
        ))}
      </ServerRackWrapper>
    </ServerRackBackground>
  );
}
