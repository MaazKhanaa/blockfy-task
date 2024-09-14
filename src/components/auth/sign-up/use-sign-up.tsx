import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "src/hooks";
import { toast } from 'react-toastify';
import { ValidationSchema } from "src/utils";

interface FormState {
    name: string;
    email: string;
    password: string;
    rePassword: string;
}

const validationSchema: ValidationSchema = {
    name: {
        required: true,
        minLength: 1,
        errorMessage: 'Name is required.',
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: 'Please enter a valid email.',
    },
    password: {
        required: true,
        minLength: 6,
        errorMessage: 'Password must be at least 6 characters long.',
    },
    rePassword: {
        required: true,
        minLength: 6,
        errorMessage: 'Re-entered password is required and must match the original password.',
    },
};

export const useSignUpComponent = () => {
    const navigate = useNavigate();

    const { formData, errors, handleChange, validateAllFields } = useForm<FormState>({
        initialValues: { name: '', email: '', password: '', rePassword: '' },
        validationSchema
    });

    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();

        if (!validateAllFields()) return;

        try {
            if (formData.password !== formData.rePassword) {
                toast.error('Passwords do not match.');
                return;
            }

            // Check if a user with the same email already exists
            const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
            const userExists = storedUsers.some((user: FormState) => user.email === formData.email);

            if (userExists) {
                toast.error('User with this email already exists.');
            } else {
                // Store user data in localStorage
                storedUsers.push(formData);
                localStorage.setItem('users', JSON.stringify(storedUsers));

                // Optionally store the logged-in user in localStorage
                localStorage.setItem('user', JSON.stringify(formData));
                toast.success('User Registered successfully!');

                // Redirect to the home page after successful registration
                navigate('/');
            }
        } catch (error) {
            console.error('Sign up error', error);
            alert('An error occurred during sign up. Please try again.');
        }
    };

    return {
        errors,
        formData,
        handleChange,
        handleSubmit
    };
};
