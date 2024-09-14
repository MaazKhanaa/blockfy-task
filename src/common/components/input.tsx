import React from 'react';
import { FormInputProps } from '../interfaces';

export const FormInput: React.FC<FormInputProps> = React.memo(
  ({ id, type, value, name, onChange, placeholder, error, Icon }) => {
    return (
      <div className='mb-4'>
        <div className="form-group flex items-center relative">
       {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="text-[#828282]" size={22} />
          </div>
        )}
        <input
          id={id}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-control w-full ${Icon ? 'pl-10' : 'pl-3'} border border-[#D0D0D0] p-[8px] rounded-[8px]`}
        />
              </div>

        {error && <div className="invalid-feedback text-red text-xs">{error}</div>}
      </div>
    );
  }
);
