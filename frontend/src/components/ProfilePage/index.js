import {useSelector} from 'react-redux'
function ProfilePage() {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      {sessionUser && (
      <h1>Hello {sessionUser.username}</h1>
      )}
    </>
  );
}

export default ProfilePage
