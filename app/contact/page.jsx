"use client"
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import Image from 'next/image';
import { useEffect, useState } from "react";

const Contact = () => {
    const {
      register,
      handleSubmit,
      reset,
      control,
      formState: { errors, isSubmitting },
    } = useForm();

    const options = [
      { value: "option1", label: "I have a prayer request" },
      { value: "option2", label: "I have a testimony to share" },
      { value: "option3", label: "I need someone to talk to" },
      { value: "option4", label: "I just got born again" },
    ];

    const onSubmit = (data) => {
      console.log(data);
    };

  return (
    <section className="contact_section" id="contact">
      <div className="contact_banner">
        <span> Contact Us</span>
      </div>
      {/* <h3>We would love to hear from you</h3>
      <span className="text">
        Do you have a prayer request, a testimony to share, need someone to talk
        to, or are you a new convert? We are available 24/7. Kindly use the
        contact form below to reach us.
      </span> */}
      <div className="div_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your name"
              />
              {errors && <span>Required field</span>}
            </div>
            <div>
              <input
                {...register("number", { required: true })}
                type="text"
                placeholder="Your phone number or email address"
              />
              {errors && <span>Required field</span>}
            </div>
            <div>
              <Controller
                name="Category" // Field name for react-hook-form
                control={control}
                defaultValue="" // Default selected value
                render={({ field }) => (
                  <select {...field}>
                    <option value="" disabled className="select">
                      Select an option
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors && <span>Please choose a category</span>}
            </div>
            <div>
              <textarea
                {...register("name", { required: true })}
                type="text"
                placeholder="Type your message here..."
                rows={10}
              />
              {errors && <span>Required field</span>}
            </div>
            <div className="file_input">
              <label className="attach">*Attach a file if necessary</label>
              <input
                {...register("name", { required: false })}
                type="file"
                placeholder="Type?"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className='contact_pic'> {/* <Image src="/group/IMG_3696.jpg" alt="mixlr_icon" width={500} height={500} />
          */}
        </div>
      </div>
    </section>
  );
}

export default Contact