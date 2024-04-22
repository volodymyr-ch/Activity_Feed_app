import { mockOwner, mockParticipant } from 'mocks/activityFeed';
import { ActivityFeed } from 'pages/ActivityFeed';

function App() {
  return <ActivityFeed user={mockOwner} participant={mockParticipant} />;
}

export default App;
