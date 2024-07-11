import React from 'react';
import { useForm } from 'react-hook-form';
import { submitReferral } from '../Api';

const ReferralForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await submitReferral(data);
      alert('Referral submitted successfully!');
    } catch (error) {
      alert('Error submitting referral: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="referrerName">Your Name</label>
        <input id="referrerName" {...register('referrerName', { required: true })} />
        {errors.referrerName && <p>This field is required</p>}
      </div>
      <div>
        <label htmlFor="referrerEmail">Your Email</label>
        <input id="referrerEmail" type="email" {...register('referrerEmail', { required: true })} />
        {errors.referrerEmail && <p>This field is required</p>}
      </div>
      <div>
        <label htmlFor="refereeName">Friend's Name</label>
        <input id="refereeName" {...register('refereeName', { required: true })} />
        {errors.refereeName && <p>This field is required</p>}
      </div>
      <div>
        <label htmlFor="refereeEmail">Friend's Email</label>
        <input id="refereeEmail" type="email" {...register('refereeEmail', { required: true })} />
        {errors.refereeEmail && <p>This field is required</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReferralForm;
