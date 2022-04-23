import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {allresident} from '../../Redux/PetServiceInfo/action'

const Home = () => {

  const [petServiceInfo, setpetServiceInfo] = useState([])
  const dispatch = useDispatch()
  const ALLpetService = useSelector((store) => (store.petServiceall.petServiceDetails)) || 0
  console.log('ALLpetService:', ALLpetService)
  
  useEffect(() => {
    getPetServiceInfo()
  },[])
  
  const getPetServiceInfo = () => {
    axios.get('http://localhost:5005/petServiceInfo').then(({ data }) => {
      console.log('data:', data)
      setpetServiceInfo([...data])
      dispatch(allresident(data))
    }).catch((e) => {
      console.log('e:', e)
      
    })
  }
  
  console.log('petServiceInfo:', petServiceInfo)
  return (
    <div>
      <table className="table w-50 m-auto">
        <thead>
          <tr>
            <th scope="col">id;</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Capactity</th>
            <th scope="col">Cost Per Day</th>
            <th scope="col">Verified</th>
            <th scope="col">Rating</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
            {ALLpetService.map((e,i) => (
              
              <tr key={e._id}>
                <td>{i+1}</td>
                <td>{e.PetServiceName}</td>
                <td>{e.PetServiceCity}</td>
                <td>{e.PetServiceAddress}</td>
                <td>{e.PetServiceCapacity}</td>
                <td>{e.PetServiceCost}</td>
                <td>{e.PetServiceVerified?"Verified":"Not Verified"}</td>
                <td>{e.PetServiceRating}</td>
                <td>
                  <Link to={`/listing/${e._id}`}><button type="button" className="btn btn-primary">Info</button></Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home