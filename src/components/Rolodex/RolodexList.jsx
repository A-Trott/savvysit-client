import React from 'react';

import {getHomeOwners, getPets} from '@utils/helpers'
import {useEffect, useState} from 'react';
import Table from '@components/Table/Table.jsx';
import '@components/Rolodex/Rolodex.scss'


export default function RolodexList() {
  const id = '1'
  //const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [profileList, setProfileList] = useState([])
  const [petList, setPetList] = useState([])


  useEffect(() => {
    getHomeOwners(id).then((data) => {
      setProfileList(data)

    })

  }, [id])

  useEffect(() => {
    getPets().then((data) => {
      setPetList(data)
      setLoading(false)
    })

  }, [])


  if (loading) {
    return <div>Loading...</div>
  }

  const peopleAliases = {first_name: 'name'}
  const peopleFields = ['id', 'first_name', 'city', "country"];
  const petAliases = {owner_name:'owner', animal_type:'animal'}

  const petFields = ['id', 'name', 'animal_type', 'age', 'owner_name'];
  return (
      <section className='rolodex-list'>
        <div className='rolodex-list__div'>
          <Table title='People' data={profileList} fields={peopleFields} aliases={peopleAliases}/>
        </div>
        <div className='rolodex-list__div'>
          <Table title='Pet' data={petList} fields={petFields} aliases={petAliases} />
        </div>


      </section>

  );

}