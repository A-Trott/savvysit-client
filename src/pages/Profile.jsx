import React from 'react';
import {useEffect, useState} from 'react';
import {getProfile} from '@utils/helpers';
import me from '@assets/images/me.jpg';

export default function Profile() {

  const id = '1'
  //const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [profileDetail, setProfileDetail] = useState([])

  useEffect(() => {
    getProfile(id).then((data) => {
      setProfileDetail(data)
      setLoading(false)
    })

  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  const {first_name, description, city, province, postal_code, profile_picture} = profileDetail

  return (
      <div className='about-me'>
        <div className='about-me__div'>
          <img className='image' src={profile_picture} alt={first_name} />
          <h2>
            {first_name}
          </h2>
          <p>
            {description}
          </p>
        </div>
        <div className='about-me__div'>
          <p>{city}, {province}</p>
        </div>
      </div>

  )
}