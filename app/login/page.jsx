'use client';
import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from '../logo.svg';

const validationSchema = Yup.object({
  //password: Yup.string().required('Şifre girmelisiniz!'),
});

const initialValues = {
  name: '',
  password: '',
  rememberMe: false,
};

const onSubmit = (values) => {
  console.log('Form submitted with values:', values);
};


const Login = () => {

  const [nameFocused, setNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);



  return (
    <div className='bg-layoutColor flex items-center justify-center h-screen w-full'>
      <div className='shadow-lg w-[70%] bg-white rounded-md md:w-[30%] h-fit flex flex-col items-center md:p-12 p-[20px]'>
        <div className='flex justify-center mt-5' ><img src={Logo.src} alt="logo_image"></img></div>
        <div className=' mx-6 mt-10 mb-5 w-full'>
          <h1 className='font-bold text-2xl  text-[#5B6C7C] '>Hoşgeldin!</h1>
          <p className='text-text'>Kullanıcı adını ve şifreni girerek devam edebilirsin</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className='flex flex-col gap-4 w-full'>
            <div className={` relative ${nameFocused ? 'border-primary' : ''}`}>
              <label htmlFor="name" className={`absolute left-4 top-3 text-lightGray transition-all duration-200 ${nameFocused ? 'top-[-6px] text-xs text-primary bg-white' : 'text-base'}`} >Kullanıcı Adı</label>
              <Field className={`w-full border rounded-md h-[50px] px-4 focus:outline-none focus:ring-0 ${nameFocused ? 'border-primary' : 'border-darkGray'}`} onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)} type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>

              <div className='relative'>
                <label htmlFor="password" className={`absolute top-3 left-4 text-lightGray transition-all duration-200 ${passwordFocused ? 'top-[-6px] text-xs text-primary bg-white' : 'text-base'}`}>Şifre</label>
                <Field className={`w-full border rounded-md h-[50px] border-darkGray px-4 focus:outline-none focus:ring-0 ${passwordFocused ? 'border-primary' : 'border-darkGray'}`} type="password" id="password" name="password" onFocus={() => setPasswordFocused(true)} onBlur={() => setPasswordFocused(false)} />
                <ErrorMessage name="password" component="div" />
              </div>

              <div className='relative flex justify-between items-center py-2'>
                <div className='flex items-center gap-2'>
                  <Field className='border w-4 h-4 rounded-md border-lightGray ' type="checkbox" id="rememberMe" name="rememberMe" />
                  <label className=' text-darkGray cursor-pointer' htmlFor='rememberMe'>Beni Hatırla</label>
                </div>
                <p className='text-darkGray cursor-pointer'>Şifremi unuttum?</p>
              </div>
            </div>

            <button className=' w-full rounded-md h-[40px]  bg-primary text-white px-4 hover:bg-[#696CFF]/95 transition duration-150' type="submit">Giriş Yap</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;