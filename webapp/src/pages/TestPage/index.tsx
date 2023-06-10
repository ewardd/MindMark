import { Button, Typography } from 'antd';
import { logout } from '@entities/Session';
import { useAppDispatch } from '@shared/model';

// TODO: Remove
const TestPage = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Typography.Text>Auth done</Typography.Text>

      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  );
};

export default TestPage;
