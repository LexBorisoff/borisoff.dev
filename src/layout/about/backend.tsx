import BackendIcons from './backend/backend-icons';
import ServerRack from './backend/server-rack';
import { BackendWrapper } from './styled/backend.styled';

export default function Backend(): React.ReactNode {
  return (
    <BackendWrapper>
      <ServerRack />
      <BackendIcons />
    </BackendWrapper>
  );
}
