import { Button, Typography } from 'antd';
import { useLogout } from '@shared/hooks';

// TODO: Remove
const TestPage = () => {
  const logout = useLogout();

  return (
    <div>
      <Typography.Text>Auth done</Typography.Text>

      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default TestPage;
