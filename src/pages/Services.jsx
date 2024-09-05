import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Services = () => {

    const [search] = useSearchParams()
    console.log(search.get('page'))
    console.log(search.get('q'))

    const [services, setServices] = useState([
        { id: 1, name: 'Service 1'},
        { id: 2, name: 'Service 2'},
        { id: 3, name: 'Service 3'},
        { id: 4, name: 'Service 4'},
        { id: 5, name: 'Service 5'},
        { id: 6, name: 'Service 6'},
    ])

    return (
        <>
            <div>Services</div>
            <ul>
                {
                    services.map((service) => <li key={service.id}><Link to={`/services/${service.id}/info`}>{service.name}</Link></li>)
                }

                {/* <li><Link to="/services/1/info">Servicio 1</Link></li>
                <li><Link to="/services/2/info">Servicio 2</Link></li>
                <li><Link to="/services/3/info">Servicio 3</Link></li>
                <li><Link to="/services/4/info">Servicio 4</Link></li>
                <li><Link to="/services/5/info">Servicio 5</Link></li>
                <li><Link to="/services/6/info">Servicio 6</Link></li> */}
            </ul>
        </>
    )
}

export default Services