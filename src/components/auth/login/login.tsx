import React from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from 'src/common/components/input';
import { Button } from 'src/common/components/button';
import { useLoginComponent } from './use-login';
import { MdLockOutline, MdOutlineEmail } from 'react-icons/md';



export const LoginComponent: React.FC = () => {
  const {
    errors,
    formData,
    handleChange,
    handleSubmit
  } = useLoginComponent()
  return (
    <div className='grid items-center mx-0 h-full'>
      <div className='col-lg-4'>
        <div className="row justify-content-center">
          <h4 className="text-2xl text-center font-semibold pb-12">Login</h4>
          <form onSubmit={handleSubmit}>
            <FormInput
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter your Email"
              error={errors.email}
              Icon={MdOutlineEmail}
            />

            <FormInput
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              error={errors.password}
              Icon={MdLockOutline}

            />
            <div className="text-right">
              <Link to="#" className="text-[#6F74DD] inline-block">Forgot password?</Link>
            </div>

            <div className="d-flex justify-content-end my-6">
              <Button type="submit" text="Log in" />
            </div>
          </form>

          <p className='text-center mt-3 mb-4 text-gray'>Have no account yet?</p>
          <Button href='/auth/sign-up' text="Registration" variant="outline" />
        </div>
      </div>
    </div>
  );
};
