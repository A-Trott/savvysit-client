import axios from '@services/axios';
import routes from '@services/routes.json';


export async function getProfile(id){
  try {
    const response = await axios.get(`${routes.profile}/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getHomeOwners(id){
  try {
    const response = await axios.get(`${routes.profile}/${id}/homeowners`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getHomeOwnerDetail(id){
  try {
    const response = await axios.get(`${routes.profile}/homeowners/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getHomeOwnerPets(id){
  try {
    const response = await axios.get(`${routes.profile}/homeowners/${id}/pets`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getPets(){
  try {
    const response = await axios.get(`${routes.pets}/`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getPetDetails(id){
  try {
    const response = await axios.get(`${routes.pets}/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}

export const { format } = new Intl.NumberFormat('en-US')