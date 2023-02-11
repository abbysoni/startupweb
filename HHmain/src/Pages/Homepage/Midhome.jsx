import React from 'react';
import './Midhome.css';

const Midhome = () => {
  const services = [
    {
      name: 'AC Repairing',
      description: 'Get your AC repaired by our experts',
      gradient: 'linear-gradient(to bottom, #FCF8E8, #E97777)'
    },
    {
      name: 'RO Service',
      description: 'Get your RO system serviced by our experts',
      gradient: 'linear-gradient(to bottom, #FCF8E8, #B3FFAE)'
    },
    {
      name: 'Deep Cleaning',
      description: 'Get your place deep cleaned by our experts',
      gradient: 'linear-gradient(to bottom, #FCF8E8, #B2A4FF)'
    }
  ];

  return (
    <section className="middle-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map(service => (
          <div
            key={service.name}
            className="service-card"
            style={{ background: service.gradient }}
          >
            <img
              src={`/${service.name.toLowerCase().replace(' ', '-')}.png`}
              alt={service.name}
            />
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Midhome;
