import React from "react";
import { FormInput } from "src/common/components/input";
import { useSignUpComponent } from "./use-sign-up";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { Button } from "src/common/components/button";


export const SignUpComponent: React.FC = () => {

  const {
    errors,
    formData,
    handleChange,
    handleSubmit
  } = useSignUpComponent()


  return (
    <div className='grid items-center mx-0 h-full'>
      <div>
        <h4 className="text-2xl text-center font-semibold pb-12">Register</h4>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="name"
            label="Name"
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            placeholder="Name"
            error={errors.name}
            Icon={LuUser2}
          />
          <FormInput
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
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
            placeholder="Password"
            error={errors.password}
            Icon={MdLockOutline}
          />
          <FormInput
            id="rePassword"
            label="Re-enter Password"
            type="password"
            value={formData.rePassword}
            name="rePassword"
            onChange={handleChange}
            placeholder="Re-enter Password"
            error={errors.rePassword}
            Icon={MdLockOutline}
          />
          <div className="d-flex justify-content-end mb-6">
            <Button type="submit" text="Create Account" />
          </div>
        </form>
        <p className='text-center mt-3 mb-4 text-gray'>Already have an account?</p>
        <Button href='/auth/login' text="Login" variant="outline" />

      </div>
    </div>
  );
};
