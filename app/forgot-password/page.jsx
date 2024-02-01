'use client'
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FcLock } from "react-icons/fc";
import * as Yup from 'yup';
import Logo from '../logo.svg';
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';

const Timer = () => {
    const [time, setTime] = useState(120);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [time]);


    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return (
        <div className='flex text-xl mt-3 justify-center '>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
};

const validationSchema = Yup.object({
    //mail: Yup.string().required('Bu alan zorunludur'),
});

const initialValues = {
    mail: '',
    password1: '',
    password2: '',
    password3: '',
    password4: '',
    password5: '',
    password6: '',
};

const onSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted with values:', values);

    setSubmitted(true);
};

const ForgotPassword = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        setSubmitted(true);
    }

    return (
        <div className='bg-layoutColor flex items-center justify-center h-screen w-full'>
            <div className='shadow-lg w-[93%] bg-white rounded-md min-w-[300px] max-w-[50%] sm:w-[60%] 2xl:w-[20%] lg:w-[31%] flex flex-col items-center py-10  md:px-[30px] px-[20px]'>
                <div className='flex justify-center mt-5 items-center gap-2' >
                    <img src={Logo.src} alt="logo_image"></img><span className='font-bold text-brand text-xl'>Brand</span>
                </div>
                {submitted ?
                    <div className='relative gap-3 mt-5'>
                        <h2 className='text-2xl mb-1 font-medium text-[25px] text-[#5D6D7E]'>Hesabınızı doğrulayın</h2>
                        <p className='text-darkGray '>Süre dolduğunda tekrar doğrulama kodu isteyebilirsiniz</p>
                        <Timer /> 
                    </div>
                    : <div className=' mx-6 mt-10 relative mb-5 w-full'>
                    <div className='flex items-center'>
                        <h1 className='font-medium text-[25px] text-2xl mb-1 text-[#5D6D7E] '>Şifreni mi unuttun?</h1>
                        <FcLock className='h-6 w-6 ml-2 mb-1 ' />
                    </div>
                    <p className='text-darkGray '>Email adresine gelen kodu girerek şifreni değiştirebilirsin</p>
                </div>}
                <Formik
                    initialValues={{
                        mail: '',
                        password1: '',
                        password2: '',
                        password3: '',
                        password4: '',
                        password5: '',
                        password6: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {props => (
                        <Form className='flex flex-col gap-4 w-full'>
                            {submitted ? (
                                <div className='relative mt-5 group'>
                                    <div className='flex items-center justify-center gap-3 w-full'>
                                        <Field className='border w-[37px] text-center text-2xl rounded-md h-[35px] text-darkGray border-[#DADEE1] focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type='text' maxlength='1' id='password1' name='password1' />
                                        <Field className='border w-[37px] text-center text-2xl rounded-md h-[35px] text-darkGray border-[#DADEE1] focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type='text' maxlength='1' id='password2' name='password2' />
                                        <Field className='border w-[37px] text-center text-2xl rounded-md h-[35px] text-darkGray border-[#DADEE1] focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type='text' maxlength='1' id='password3' name='password3' />
                                        <Field className='border w-[37px] text-center text-2xl rounded-md h-[35px] text-darkGray border-[#DADEE1] focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type='text' maxlength='1' id='password4' name='password4' />
                                        <Field className='border w-[37px] text-center text-2xl rounded-md h-[35px] text-darkGray border-[#DADEE1] focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type='text' maxlength='1' id='password5' name='password5' />
                                        <Field className='border w-[37px] text-center text-2xl rounded-md h-[35px] text-darkGray border-[#DADEE1] focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type='text' maxlength='1' id='password6' name='password6' />
                                    </div>
                                </div>) : (
                                <>
                                    <div className='relative group'>
                                        <label htmlFor="mail" className={`absolute top-3 text-[20px] select-none left-4 text-lightGray group-focus-within:top-[-7px] group-focus-within:text-xs group-focus-within:left-[13px] group-focus-within:px-1 group-focus-within:text-primary group-focus-within:bg-white transition-all duration-200 ${props.values.mail.length >= 1 ? 'top-[-7px] left-[13px] text-xs px-1 bg-white' : 'text-base'}`}>Email</label>
                                        <Field className='w-full mb-3 border rounded-md h-[50px] text-darkGray border-[#DADEE1] px-4 focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type="mail" id="mail" name="mail" />
                                        <ErrorMessage name="mail" component="div" />
                                    </div>
                                    <button onClick={handleSubmit} className='w-full rounded-md h-[40px] bg-primary text-white px-4 hover:bg-primary/95 transition duration-150' type='submit'>Kodu Gönder</button>
                                    <Link href='/login' className='flex items-center justify-center mr-6 p-2 cursor-pointer'>
                                        <IoIosArrowBack className='h-6 w-6 ml-2  text-primary' />
                                        <span className=' text-primary '>Geri dön</span>
                                    </Link>
                                </>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ForgotPassword