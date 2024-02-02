'use client'
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../logo.svg';
import { FcLock } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";

const Timer = ({ time }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return (
        <div className='flex text-xl mt-3 justify-center'>
            {formattedTime}
        </div>
    );
};

const validationSchema = Yup.object({
    mail: Yup.string().required('Bu alan zorunludur'),
    
});

const initialValues = {
    mail: '',
};

const ForgotPassword = () => {
    const [submitted, setSubmitted] = useState(false);
    const [time, setTime] = useState(120);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (time > 0 && submitted) {
                setTime(time - 1);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [time, submitted]);

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Form submitted with values:', values);
        setSubmitted(true);
    };

    return (
        <div className='bg-layoutColor flex items-center justify-center h-screen w-full'>
            <div className='shadow-lg w-[93%] bg-white rounded-md min-w-[300px] max-w-[50%] sm:w-[60%] 2xl:w-[23%] lg:w-[31%] flex flex-col items-center py-8  md:px-[30px] px-[20px]'>
                <div className='flex justify-center mt-3 items-center gap-2' >
                    <Image src={Logo.src} alt="logo_image" width={25} height={25}></Image><span className='font-bold text-brand text-xl'>Brand</span>
                </div>
                {submitted ?
                    <div>
                        <div className='relative gap-3 mt-5'>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-2xl ml-2 font-medium text-[25px] text-[#5D6D7E]'>Hesabınızı doğrulayın</h2>
                                <Timer time={time} />
                            </div>
                        </div>
                        <div className='flex mt-3 justify-center'>
                            <p className='text-darkGray'>Kodu girin</p>
                        </div>
                    </div>
                    : <div className=' mx-6 mt-10 relative mb-5 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-medium text-[25px] text-2xl mb-1 text-[#5D6D7E] '>Şifreni mi unuttun?</h1>
                            <FcLock className='h-6 w-6 ml-2 mb-1 ' />
                        </div>
                        <p className='text-darkGray '>Email adresine gelen kodu girerek şifreni değiştirebilirsin</p>
                    </div>}
                <Formik
                    initialValues={{ ...initialValues }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {props => (
                        <Form className='flex flex-col gap-4 w-full'>
                            {submitted ? (
                                <div className='relative mt-1 group'>
                                    <div className='flex flex-col gap-5'>

                                        <div className='flex items-center justify-center gap-3 w-full'>

                                            {[...Array(6)].map((_, index) => (
                                                <Field
                                                    key={index}
                                                    className="border block w-[37px] text-center text-2xl rounded-md h-[35px]  text-darkGray border-lightGray disabled:opacity-50 focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none"
                                                    type="text"
                                                    maxLength="1"
                                                    autoComplete="off"
                                                    id={`password${index + 1}`}
                                                    name={`password${index + 1}`}
                                                    disabled={time === 0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Backspace') {
                                                            e.preventDefault();
                                                            if (index > 0 && index < 6) {
                                                                props.setFieldValue(`password${index + 1}`, '');
                                                                document.getElementById(`password${index}`).focus();
                                                            }
                                                            else if (index == 0) {
                                                                props.setFieldValue(`password${index + 1}`, '');
                                                            }
                                                        } else if (/^\d$/.test(e.key)) {
                                                            e.preventDefault();
                                                            props.setFieldValue(`password${index + 1}`, e.key);
                                                            if (index < 5) {
                                                                document.getElementById(`password${index + 2}`).focus();
                                                            }
                                                        } else if (e.key === 'ArrowLeft' && index > 0) {
                                                            e.preventDefault();
                                                            document.getElementById(`password${index}`).focus();
                                                        } else if (e.key === 'ArrowRight' && index < 5) {
                                                            e.preventDefault();
                                                            document.getElementById(`password${index + 2}`).focus();
                                                        }
                                                        
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <div className='flex items-center justify-center w-full'>
                                            <button className={`${time === 0 ? '' : 'hidden'} rounded-md h-[40px] bg-primary text-white px-4 hover:bg-primary/90 transition duration-200`} onClick={() => {setTime(120); props.resetForm();}} type='submit'>Tekrar Gönder</button>
                                        </div>
                                    </div>
                                </div>) : (
                                <>
                                    <div className='relative group'>
                                        <label htmlFor="mail" className={`absolute top-3 text-[20px] select-none left-4 text-lightGray group-focus-within:top-[-7px] group-focus-within:text-xs group-focus-within:left-[13px] group-focus-within:px-1 group-focus-within:text-primary group-focus-within:bg-white transition-all duration-200 ${props.values.mail.length >= 1 ? 'top-[-7px] left-[13px] text-xs px-1 bg-white' : 'text-base'}`}>Email</label>
                                        <Field className='w-full mb-3 border rounded-md h-[50px] text-darkGray border-[#DADEE1] px-4 focus:border-[2px] focus:border-primary focus:ring-0 focus:outline-none' type="mail" autoComplete="off" id="mail" name="mail" />
                                        <ErrorMessage className='' name="mail" component="div" />
                                    </div>
                                    <button className='w-full rounded-md h-[40px] bg-primary text-white px-4 hover:bg-primary/95 transition duration-150' type='submit'>Kodu Gönder</button>
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