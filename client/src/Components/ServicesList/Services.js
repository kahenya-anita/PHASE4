import React, { useEffect, useState } from "react";
import ServiceDets from "./ServiceDets";
import ServiceList from "./ServiceList";
import SubmitRequest from "../SubmitRequest";

function Services({ user }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services")
      .then((resp) => resp.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    setServices(services.filter((item) => item.id !== id));
  };

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleUpdate = (updatedService) => {
    const updatedArray = services.map((service) => {
      return service.id === updatedService.id ? updatedService : service;
    });
    setServices(updatedArray);
  };

  return (
    <div className="dashboard">
      <center style={{ margin: 5 + "vh" }}>
        <h2>
          Afrikanest{" "}
          <span style={{ color: "orangered" }}>Services Dashboard</span>
        </h2>
      </center>
      <div className="client-area">
        <div
          className="row width col-md-6 overflow"
          style={{ marginLeft: 2 + "vw", marginRight: 2 + "vw" }}
        >
          <ServiceDets />
        </div>
        <div className="services-log">
          <div className="title" style={{ marginBottom: 2 + "vh" }}>
            {user ? (
              <div>
                <h4>
                  Hello{" "}
                  <span style={{ color: "orangered" }}>{user.username}</span>
                </h4>
              </div>
            ) : null}
            <SubmitRequest user={user} onAddService={handleAddService} />
          </div>

          <div className="overflow">
            {services.map((service) => {
              return (
                <div key={service.id}>
                  <ServiceList
                    id={service.id}
                    service={service.service}
                    location={service.location}
                    address={service.address}
                    contact_info={service.contact_info}
                    description={service.description}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
