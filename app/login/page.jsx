'use client';
import React, { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from '../logo.svg';
import Link from 'next/link';

const validationSchema = Yup.object({
  //name: Yup.string().required('Bu alan zorunludur'),
  //password: Yup.string().required('Bu alan zorunludur'),
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
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='bg-layoutColor flex items-center justify-center h-screen w-full'>
      <div className='shadow-lg w-[93%] bg-white rounded-md min-w-[300px] max-w-[50%] sm:w-[60%] 2xl:w-[20%] lg:w-[31%] flex flex-col items-center py-10  md:px-[30px] px-[20px]'>
        <div className='flex justify-center mt-5 items-center gap-2' ><img src={Logo.src} alt="logo_image"></img><span className='font-bold text-brand text-xl'>Brand</span></div>
        <div className=' mx-6 mt-8 mb-5 w-full'>
          <h1 className='font-bold text-2xl  text-[#4D5F71] '>Hoşgeldin!</h1>
          <p className='text-darkGray'>Kullanıcı adını ve şifreni girerek devam edebilirsin</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {props => (
          <Form className='flex flex-col gap-4 w-full'>
            <div className='relative group'>
                <label htmlFor="name" className={`absolute left-4 top-3 select-none text-lightGray group-focus-within:top-[-6px] group-focus-within:px-1 group-focus-within:left-[13px] group-focus-within:text-xs group-focus-within:text-primary group-focus-within:bg-white transition-all duration-200 ${props.values.name.length >= 1 ? 'top-[-6px] text-xs px-1 left-[13px]  bg-white' : 'text-base'}`} >Kullanıcı Adı</label>
                <Field className='w-full text-darkGray border rounded-md h-[50px] px-4 border-darkGray focus:border-[2px] focus:outline-none focus:ring-0 focus:border-primary' type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div"/>
            </div>
            <div>

              <div className='relative group'>
                <label htmlFor="password" className={`absolute top-3 select-none left-4 text-lightGray group-focus-within:top-[-6px] group-focus-within:text-xs group-focus-within:left-[13px] group-focus-within:px-1 group-focus-within:text-primary group-focus-within:bg-white transition-all duration-200 ${props.values.password.length >= 1 ? 'top-[-6px] left-[13px]  text-xs px-1 bg-white' : 'text-base'}`}>Şifre</label>
                <Field className='w-full  border rounded-md h-[50px] text-darkGray border-darkGray px-4 focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type={showPassword ? "text" : "password"} id="password" name="password" />
                <div className='absolute right-4 top-[26px] transfrom -translate-y-1/2  text-lightGray cursor-pointer' onClick={handleShowPassword}>
                  {showPassword ? <IoEyeOffSharp size={20} /> : <IoEye size={20} />}
                </div>
                <ErrorMessage name="password" component="div"/>
              </div>
              
              <div className='relative flex justify-between items-center py-2'>
                <div className='flex items-center gap-2'>
                  <Field className='w-4 h-4 rounded-md accent-primary' type="checkbox" id="rememberMe" name="rememberMe" />
                  <label className=' text-darkGray cursor-pointer' htmlFor='rememberMe'>Beni Hatırla</label>
                </div>
                <Link href="/forgot-password" className='text-primary cursor-pointer'>Şifremi unuttum?</Link>
              </div>
            </div>

            <button className='w-full rounded-md h-[40px]  bg-primary text-white px-4 hover:bg-primary/95 transition duration-150' type="submit">Giriş Yap</button>
          </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;