import BackendIcons from './backend/backend-icons';
import ServerRack from './backend/server-rack';
import { BackendContainer } from './styled/backend.styled';

export default function Backend(): React.ReactNode {
  return (
    <BackendContainer>
      <ServerRack />
      <BackendIcons />
    </BackendContainer>
  );
}
