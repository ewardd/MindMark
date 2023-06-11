import { Button, Typography } from 'antd';
import { logout, useAppDispatch } from '@shared/model';

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
