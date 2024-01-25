'use server'
import * as Session from '@/libs/Session';
import PopularTopic from './PopularTopic';
import Profile from './Profile';
import LoginWidget from './LoginWidget';
import Slider from './Slider';

async function Sidebar() {
  return (
    <aside>
      <Slider/>

      {(
        !Session.validate()
        ? <LoginWidget/>
        : <Profile/>
      )}

      <PopularTopic/>
    </aside>
  )
}

export default Sidebar