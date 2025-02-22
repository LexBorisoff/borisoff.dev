import BackendIcons from './backend-icons';
import ServerRack from './server-rack';
import { BackendContainer } from './styled/backend.styled';

export default function Backend(): React.ReactNode {
  return (
    <BackendContainer>
      <ServerRack />
      <BackendIcons />
    </BackendContainer>
  );
}
