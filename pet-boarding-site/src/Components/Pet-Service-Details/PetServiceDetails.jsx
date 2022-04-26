import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const PetServiceDetails = () => {

  const id = useParams()
  // console.log('id:', id)
  const service_id = id.id
  console.log('service_id:', service_id)

  const [servicedetails, setservicedetails] = useState([])
  
  useEffect(() => {
    getPetServiceAllInfo()
  },[])
  
  const getPetServiceAllInfo = () => {
    // axios.get(`http://localhost:5005/petServiceInfo/${service_id}`).then((res) => {
    axios.get(`https://stormy-tor-28680.herokuapp.com/${service_id}`).then((res) => {
      console.log('res:', res)
      const {data} = res
      console.log('data:', data)
      setservicedetails([data])
    })
  }
  console.log('servicedetails:', servicedetails)
  

  return (
    <div>
            <table className="table w-50 m-auto">
        <thead>
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Capactity</th>
            <th scope="col">Cost Per Day</th>
            <th scope="col">Verified</th>
            <th scope="col">Rating</th>
            <th scope="col">Pet Watched</th>
            <th scope="col">Pet will sleep</th>
            <th scope="col">No of walks</th>
          </tr>
        </thead>
        <tbody>
            {servicedetails.map((e,i) => (
              
              <tr key={e._id}>
                <td>{i+1}</td>
                <td>{e.PetServiceName}</td>
                <td>{e.PetServiceCity}</td>
                <td>{e.PetServiceAddress}</td>
                <td>{e.PetServiceCapacity}</td>
                <td>{e.PetServiceCost}</td>
                <td>{e.PetServiceVerified?"Verified":"Not Verified"}</td>
                <td>{e.PetServiceRating}</td>
                <td>{e.PetServiceWatched}</td>
                <td>{e.PetServiceSleep}</td>
                <td>{e.PetServiceWalks}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default PetServiceDetails