import { useSelector } from 'react-redux'
import {useEffect} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import CurrentUser from './CurrUser';
import ElseProfView from './ElseProfView';


function ProfilePage() {
  const { username } = useParams()
  const sessionUser = useSelector((state) => state.session.user);
  // const profile = useSelector((state) => state.session.user.username);

  useEffect(() => {

  }, [sessionUser])
  if (!sessionUser) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {sessionUser && sessionUser.username === username ?
      <CurrentUser />
        :
        <ElseProfView />
      }
    </>
  );
}

export default ProfilePage
