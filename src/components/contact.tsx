import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        // Add logic to handle form submission, e.g., API call
        window.location.href =
            "https://script.google.com/macros/s/AKfycby12uPI9lsg-hOZfV-V6l5wDkBpKzt7IwMlsRN77Ry-py6oMTg7ll1QtoJaPXfANmuQeA/exec";
    };

    return (
        <div data-aos="fade-up" className="h-screen">
            <div className="absolute hidden md:block w-32 right-14 bottom-10">
                <img src="/yellow-ball.png" alt="yellow ball" />
            </div>
            <div className="absolute hidden md:block -left-20 -bottom-10">
                <img className="w-96 h-96" src="/yellow-ball.png" alt="yellow ball" />
            </div>
            <div className="absolute hidden md:block -right-12 top-0">
                <img src="/yellow-ball.png" alt="yellow ball" />
            </div>
            <div className="mt-20 absolute flex justify-center items-center w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h1 className="text-2xl font-bold mb-6">CODE WITH GUNA</h1>
                        <div className="md:flex justify-center">
                            <div>
                                {/* Name Field */}
                                <div className="my-3 font-medium text-[1em] text-[#828282]">
                                    Hello, I am <span className="text-[red]">*</span>
                                </div>
                                <input
                                    type="text"
                                    className="rounded-md bg-gray-50 w-full md:w-96 p-2 focus:outline-[#ffde29]"
                                    placeholder="Name"
                                    {...register("Name", { required: "Name is required" })}
                                />
                                {errors.Name && <small className="error">{errors.Name.message}</small>}

                                {/* Email Field */}
                                <div className="my-3 font-medium text-[1em] text-[#828282]">
                                    Please contact me at <span className="text-[red]">*</span>
                                </div>
                                <input
                                    type="email"
                                    className="rounded-md bg-gray-50 w-full md:w-96 p-2 focus:outline-[#ffde29]"
                                    placeholder="Email Address"
                                    {...register("Email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                />
                                {errors.Email && <small className="error">{errors.Email.message}</small>}

                                {/* Phone Number Field */}
                                <div className="my-3 font-medium text-[1em] text-[#828282]">
                                    Phone Number <span className="text-[red]">*</span>
                                </div>
                                <input
                                    type="tel"
                                    className="rounded-md bg-gray-50 w-full md:w-96 p-2 focus:outline-[#ffde29]"
                                    placeholder="(xxxxx xxxx)"
                                    {...register("PhoneNumber", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Invalid phone number",
                                        },
                                    })}
                                />
                                {errors.PhoneNumber && <small className="error">{errors.PhoneNumber.message}</small>}

                                {/* Message Field */}
                                <div className="my-3 font-medium text-[1em] text-[#828282]">
                                    Message <span className="text-[red]">*</span>
                                </div>
                                <textarea
                                    rows={4}
                                    className="rounded-md bg-gray-50 w-full md:w-96 p-2 focus:outline-[#ffde29]"
                                    placeholder="Write your needs"
                                    {...register("Message", { required: "Message is required" })}
                                ></textarea>
                                {errors.Message && <small className="error">{errors.Message.message}</small>}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="p-2 w-full my-4 bg-[#ffde29] font-semibold rounded-md px-2"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

// CSS styles
const styles = `
  .error {
    color: red;
    font-size: 12px;
  }
  .background-image {
    background-image: url("/contact-us.png");
    background-size: cover;
  }
`;
