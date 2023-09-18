import React from 'react'

const DoctorList = ({doctorList}) => {
  return (
    <div class="doctors">
                    {
                        doctorList.map(dr =>{
                            return (<div className="doctor">
                                <img src={dr.image} alt="" className="mb-2 img" />
                                <h2 className="font-bold p-1">{dr.name}</h2>
                                <div className="flex flex-row justify-between pr-2">
                                    <span className="spec p-1 mx-1">{dr.speacialist}</span>
                                    <span className="rating p-1">{dr.rating} ⭐</span>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className="text_para p-1">
                                        {dr.hospital}
                                    </p>
                                    <button className="p-1">{"-->"}</button>
                                </div>
                            </div>)
                        })
                    }
      </div>
  )
}

export default DoctorList
