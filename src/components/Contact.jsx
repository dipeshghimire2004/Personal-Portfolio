import emailjs from '@emailjs/browser'; // Import EmailJS for sending emails
import { useState } from 'react'; // Import useState hook from React for state management
import { Toaster, toast } from 'react-hot-toast'; // Import Toaster and toast for notifications
import { FiSend } from 'react-icons/fi'; // Import FiSend icon from react-icons
import {motion} from 'framer-motion'

const Contact = () => {
    // State to hold form data with initial empty values
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // State to hold validation errors
    const [errors, setErrors] = useState({});

    // State to manage sending status
    const [isSending, setSending] = useState(false);

    // Function to handle input changes and update form data state
    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        setFormData({
            ...formData, // Spread existing formData
            [name]: value, // Update the specific field based on input name
        });
    };

    // Function to validate form fields
    const validate = () => {
        let errors = {}; // Initialize an empty errors object

        // Check if name is empty and add error if true
        if (!formData.name) errors.name = "Name is required";

        // Check if email is empty or invalid and add error if true
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is Invalid";
        }

        // Check if message is empty and add error if true
        if (!formData.message) errors.message = "Message is required";

        return errors; // Return errors object
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const validationErrors = validate(); // Validate the form data
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set errors if validation fails
        } else {
            setErrors({}); // Clear any previous errors
            setSending(true); // Set sending state to true

            // Send email using EmailJS
            emailjs.send(
                "service_mq9puoj", // EmailJS service ID
                "template_kravrr6", // EmailJS template ID
                formData, // Form data to be sent
                "5Nvz5sJ_LOyhcbzcI" // EmailJS user ID
            )
            .then((response) => {
                // Show success toast notification on successful email send
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset form data
            })
            .catch((error) => {
                // Show error toast notification if email send fails
                console.log("Failed...", error);
                toast.error("Failed to send message. Please try again later.");
            })
            .finally(() => {
                setSending(false); // Reset sending state
            });
        }
    };

    return (
        <motion.div
        initial={{opacity:0, scale:0.95}}
        whileInView={{opacity:1, scale:1,
            transition:{duration:1}
        }}
        className='p-4 lg:w-1/2 border border-stone-50/30 rounded-xl' id="contact">
            <Toaster /> 
            <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>
                Let's Connect
            </h2>
            <form onSubmit={handleSubmit}> 
                <div className='mb-4 flex space-x-5'>
                    {/* Name input field */}
                    <div className='lg:w-1/2'>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            placeholder='Username' 
                            onChange={handleChange} // Handle input changes
                            className='bg-transparent border border-stone-50/30 rounded-xl px-9 py-4 focus:outline-none'
                        />
                       
                        {errors.name && (
                            <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                        )}
                    </div>

                    {/* Email input field */}
                    <div className='lg:w-1/2'>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            placeholder='Email Address' 
                            onChange={handleChange} // Handle input changes
                            className='bg-transparent border border-stone-50/30 rounded-xl px-9 py-4 focus:outline-none'
                        />
                  
                        {errors.email && (
                            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className='lg:w-full flex flex-col'>
                    
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        placeholder='Feedback ...' 
                        onChange={handleChange}
                        rows="4" 
                        className='bg-transparent border border-stone-50/30 rounded-xl p-4 focus:outline-none'
                    />
                  
                    {errors.message && (
                        <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
                    )}
                </div>
               
                <button 
                    type='submit' 
                    className={`mt-4 bg-blue-500 text-white rounded-xl p-2 ${isSending ? "cursor-not-allowed opacity-50" : ""}`} 
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : "Send"}
                    <FiSend className='inline ml-2' /> 
                </button>
            </form>
        </motion.div>
    );
};

export default Contact; // Export the Contact component as default
