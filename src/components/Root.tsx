import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <h1>Im root</h1>
      <Outlet />
    </>
  );
}
