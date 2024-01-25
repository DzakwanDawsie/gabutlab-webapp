'use server'
import * as Session from '@/libs/Session';
import LogoutForm from './LogoutForm';

function Profile() {
  const profile = Session.getData();

  if (!profile) return '';

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-header-photo">
          <img src={`https://ui-avatars.com/api/?name=${profile.name}`} />
        </div>
        <div className="profile-header-detail">
          <div className="profile-header-detail-username">{profile.name}</div>
          <div className="profile-header-detail-email">{profile.email}</div>
        </div>
      </div>
      <div className="profile-body">
        <LogoutForm/>
      </div>
    </div>
  )
}

export default Profile