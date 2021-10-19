import React from 'react';
import { useForm } from 'react-hook-form';
import './Appointment.css';

const Appointment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <h1 className="text-center mt-5">Make an <span className="text-info">Appointment</span></h1>
      <p className="text-center"><small>Always book your appointment previous day, before taking checkup</small></p>
      <div className=" form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="w-100 form-name" placeholder="name" {...register("Name")} /><br />
          <input className="w-100 form-email" placeholder="email" {...register("Email", { required: true })} /><br />
          {errors.Email && <span>This field is required</span>}
          <div className="mt-2">
            <label className="me-2" htmlFor="">Choose Dentist: </label>
            <select {...register("doctor")}>
            <option value="John Henry">John Henry</option>
            <option value="James Sebastains">James Sebastains</option>
            <option value="Thomas Bond">Thomas Bond</option>
            <option value="Watson Thomas">Watson Thomas</option>
            <option value="Ama John">Ama John</option>
            <option value="Thomas Bond">Thomas Bond</option>
          </select>
          </div>
          <div className="my-3">
            <label className="me-3" htmlFor="">Schedule:</label>
            <select  {...register("schedule")}>
              <option value="7.00pm">7.00pm</option>
              <option value="9.00pm">9.00pm</option>
              <option value="11.00am">11.00am</option>
              <option value="4.00pm">4.00pm</option>
            </select>
          </div>
          <input className="btn btn-primary" type ="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Appointment;