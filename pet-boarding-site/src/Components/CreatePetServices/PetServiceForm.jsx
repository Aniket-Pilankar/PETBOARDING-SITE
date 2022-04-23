import axios from 'axios';
import React, { useState } from 'react'

const PetServiceForm = () => {

  
  const [form, setform] = useState()

  const handle_Onchange = (e) => {
    const {value,name} = e.target;
    setform({
      ...form,
      [name]:value
    })
  }

  const handle_OnSubmit = (e) => {
    e.preventDefault()
    // console.log(form)
    axios.post('http://localhost:5005/petServiceInfo',form).then(({data}) => {
      console.log('data:', data)

    })
  }


  return (
    <div>
      <h2>Fill in the Details</h2>

      <form onSubmit={handle_OnSubmit} >
        <div className='d-flex w-50 m-auto justify-content-evenly'>
          <div>
            <div className="mb-3 ">
              <label htmlFor="petServiceName" className="form-label">Name</label>
              <input type="text" className="form-control" id="petServiceName" name='PetServiceName' onChange={handle_Onchange} />

            </div>
            <div className="mb-3">
              <label htmlFor="PetServiceCity" className="form-label">City</label>
              <input type="text" className="form-control" name='PetServiceCity' id="PetServiceCity" onChange={handle_Onchange} />
            </div>
            <div className="mb-3 ">
              <label htmlFor="PetServiceAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="PetServiceAddress" name='PetServiceAddress' onChange={handle_Onchange} />

            </div>
            <div className="mb-3">
              <label htmlFor="PetServiceCapacity" className="form-label">Capacity</label>
              <input type="number" className="form-control" id="PetServiceCapacity" name='PetServiceCapacity' onChange={handle_Onchange} />
            </div>
            <div className="mb-3 ">
              <label htmlFor="PetServiceCost" className="form-label">Cost per day</label>
              <input type="number" className="form-control" id="PetServiceCost" name='PetServiceCost' onChange={handle_Onchange} />

            </div>
          </div>
          <div>
            <div className="mb-3 form-check">
              <input className="form-check-input" type="radio" name="PetServiceVerified" id="flexRadioDefault1" value={true} onChange={handle_Onchange}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                Verified
                </label><br />
                <input className="form-check-input" type="radio" name="PetServiceVerified" id="flexRadioDefault1" value={false} onChange={handle_Onchange}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                Not Verified
                </label>
            </div>
            <div className="mb-3">
              <label htmlFor="PetServiceRating" className="form-label">Rating</label>
              <input type="number" className="form-control" id="PetServiceRating" name='PetServiceRating' onChange={handle_Onchange} />
            </div>
            <div className="mb-3">
              <label htmlFor="PetServiceWatched" className="form-label">Number of pets that will be watched at one time.</label>
              <input type="number" className="form-control" id="PetServiceWatched" name='PetServiceWatched' onChange={handle_Onchange} />
            </div>
            <div className="mb-3">
              <label htmlFor="PetServiceSleep" className="form-label">The place your pet will sleep at night.</label>
              <input type="text" className="form-control" id="PetServiceSleep" name='PetServiceSleep' onChange={handle_Onchange} />
            </div>
            <div className="mb-3">
              <label htmlFor="PetServiceWalks" className="form-label">The number of walks provided per day.</label>
              <input type="number" className="form-control" id="PetServiceWalks" name='PetServiceWalks' onChange={handle_Onchange} />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>

  )
}

export default PetServiceForm