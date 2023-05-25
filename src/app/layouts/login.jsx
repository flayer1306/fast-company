import React, { useEffect, useState } from 'react';
import { TextField } from '../components';
import { validator } from '../utils/validator';

export const Login = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const validatorConfig = {
        email: {
            isRequired: {
                message: 'электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'электронная почта введена некорректно'
            }
        },
        password: {
            isRequired: {
                message: 'пароль обязателен для заполнения'
            },
            isCapitalSymbol: {
                message: 'пароль должен содержать минимум одну заглавную букву'
            },
            isContainDigit: {
                message: 'пароль должен содержать минимум одну цифру'
            },
            min: {
                message: 'пароль должен состоять минимум из 8 символов',
                value: 8
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleChange = ({ target }) => {
        setData((prevState) => (
            {
                ...prevState,
                [target.name]: target.value
            }
        ));
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
        setData({ email: '', password: '' });
    };

    const { email, password } = data;
    return (
        <div className="container mt-5">
            <div className="row">
                <div className='col-md-6 offset-md-3 shadow p-4'>
                    <h3 className='mb-4'>Авторизация</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name='email'
                            label='Email'
                            value={email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            name='password'
                            label='Пароль'
                            type='password'
                            value={password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                        <button
                            type='submit'
                            disabled={!isValid}
                            className='btn btn-primary w-100 mx-auto'
                        >
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
