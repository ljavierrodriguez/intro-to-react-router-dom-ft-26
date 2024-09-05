import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ServiceInfo = () => {
    const navigate = useNavigate()
    const params = useParams()

    return (
        <>
            <div>Service {params?.service_id} Info</div>
            <button onClick={() => navigate(-1)}>Regresar</button>
            <button onClick={() => navigate("/")}>Home</button>
        </>
    )
}

export default ServiceInfo