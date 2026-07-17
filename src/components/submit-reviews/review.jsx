'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Rating from '@mui/material/Rating';
import { toast, ToastContainer } from "react-toastify";
import { useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";

const AddReview = ({service_name}) => {


    const [rating, setrating] = useState('');
    const [name, setname] = useState('');
    const [message, setmessage] = useState('');
    const [email, setemail] = useState('');
    const [service, setservice] = useState(service_name);

    const [image, setimage] = useState('');
    const { data: session } = useSession();
    const [allow, setallow] = useState(false);
  

    useEffect(() => {

        const myfun = async () => {
            const reviews = await fetch('/api/reviews');
            const jsondata = await reviews.json();
            const filter = jsondata.find((items) => items.email === session?.user?.email && items.service === service);
            if (filter) {
                setallow(false)
            } else {
                setallow(true)
            }
        }
        myfun();
    }, [session])

    useEffect(() => {
        if (session) {
            setname(session?.user?.name);
            setemail(session?.user?.email);
            setimage(session?.user?.image);

        }
    }, [session])


    const submitHandler = async (e) => {
        e.preventDefault()

        if (name !== '' && message !== "" && email !== "" && rating !== '') {
            try {
                const postdata = await fetch('/api/reviews', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, rating, message, status: 'pending', image, service })
                })

                if (postdata.ok) {
                    toast.success('Thankyou for Submitting Review')
                    setTimeout(() => {
                        window.location.reload()
                    }, 1200);

                }
                else {
                    toast.success('Something went wrong')
                }

            } catch (error) {
                console.log(error)
            }
        }
        else {
            toast.error('all fields are required')
        }
    }

    if (allow) {
        return (
            <>
                <div id="AddReview" className="add_reviews_main">
                    <h2>Add Review</h2>
                    <form className="reviews_submit_form">
                        <div className="add_reviews_flex">
                            <input required name="name" disabled value={name} placeholder="Your Name" type="name" />
                            <input required name="email" disabled value={email} onChange={e => setemail(e.target.value)} placeholder="Your Email" type="email" />
                        </div>
                        <textarea required name="message" id="comment" onChange={e => setmessage(e.target.value)} placeholder="Your Review"></textarea>
                        <Rating name="half-rating" onChange={(event, newValue) => {
                            setrating(newValue);
                        }} defaultValue={2.5} precision={0.5} />
                        <button onClick={submitHandler}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddReview;