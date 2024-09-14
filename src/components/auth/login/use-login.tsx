import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ValidationSchema } from "src/utils";
import { toast } from "react-toastify";
import { useForm } from "src/hooks";




export const useLoginComponent = () => {

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    console.log('storedUsers',storedUsers);
    

    // Define the validation schema
    const validationSchema: ValidationSchema = {
        email: {
            required: true,
            pattern: /\S+@\S+\.\S+/,
            errorMessage: 'Please enter a valid email address.',
        },
        password: {
            required: true,
            minLength: 6,
            errorMessage: 'Password must be at least 6 characters long.',
        },
    };

    const navigate = useNavigate();

  // Use the useForm hook for managing form data and validation
  const { formData, errors, handleChange, validateAllFields } = useForm({
    initialValues: { email: '', password: '' },
    validationSchema,
  });

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    // Validate all fields before submitting
    if (!validateAllFields()) return;

    // Retrieve users from local storage
    
    // Check if a user exists with the entered email and password
    const user = storedUsers.find(
      (user: { email: string; password: string }) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      // Store the logged-in user in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Login successful!');
      navigate('/dashboard');
    } else {
      toast.error('Incorrect email or password');
    }
  };

  return {
    errors,
    formData,
    handleChange,
    handleSubmit
};

}