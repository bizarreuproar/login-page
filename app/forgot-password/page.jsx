'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FcLock } from "react-icons/fc";
import * as Yup from 'yup';
import Logo from '../logo.svg';

const validationSchema = Yup.object({
    //mail: Yup.string().required('Bu alan zorunludur'),
});

const initialValues = {
    mail: '',
};

const onSubmit = (values) => {
    console.log('Form submitted with values:', values);
};

const ForgotPassword = () => {

  return (
    <div className='bg-layoutColor flex items-center justify-center h-screen w-full'>
        <div className='shadow-lg w-[90%] bg-white rounded-md md:w-[70%] lg:w-[25%] flex flex-col items-center lg:p-8 px-[20px] py-10'>
            <div className='flex justify-center mt-5 items-center gap-2' >
                <img src={Logo.src} alt="logo_image"></img><span className='font-bold text-brand text-xl'>Brand</span>
            </div>
            <div className=' mx-6 mt-10 relative mb-5 w-full'>
                <div className='flex items-center'>
                    <h1 className='font-medium text-[25px] text-2xl mb-1 text-[#5D6D7E] '>Şifreni mi unuttun?</h1>
                    <FcLock className='size-6' />
                </div>
                <p className='text-darkGray '>Email adresini girerek şifreni değiştirebilirsin</p>
            </div>
    <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
            {props => (
            <Form className='flex flex-col gap-4 w-full'>
            <div className='relative group'>
                <label htmlFor="mail" className={`absolute top-3 select-none left-4 text-lightGray group-focus-within:top-[-6px] group-focus-within:text-xs group-focus-within:left-[13px] group-focus-within:px-1 group-focus-within:text-primary group-focus-within:bg-white transition-all duration-200 ${props.values.mail.length >= 1 ? 'top-[-6px] left-[13px]  text-xs px-1 bg-white' : 'text-base'}`}>Email</label>
                <Field className='w-full mb-3 border rounded-md h-[50px] text-darkGray border-darkGray px-4 focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type="mail" id="mail" name="mail" />
                <ErrorMessage name="mail" component="div"/>
            </div>
            <button className='w-full rounded-md h-[40px]  bg-primary text-white px-4 hover:bg-primary/95 transition duration-150' type='submit'>Bağlantı gönder</button>
            <span ></span>
            </Form>
            )}
    </Formik>
    </div>
    </div>
  )
}

export default ForgotPassword