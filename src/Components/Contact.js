import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
    };

    if (!data) return null;

    const {
        name,
        address: { street, city, state, zip },
        phone,
        contactmessage
    } = data;

    return (
        <section id="contact">
            <Fade bottom duration={1000}>
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1>
                            <span>Get In Touch.</span>
                        </h1>
                    </div>

                    <div className="ten columns">
                        <p className="lead">{contactmessage}</p>
                    </div>
                </div>
            </Fade>

            <div className="row">
                <Slide right duration={1000}>
                    <div className="eight columns">
                        <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">
                                        Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        size="35"
                                        id="contactName"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">
                                        Email <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        size="35"
                                        id="contactEmail"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        size="35"
                                        id="contactSubject"
                                        name="subject"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactMessage">
                                        Message <span className="required">*</span>
                                    </label>
                                    <textarea
                                        cols="50"
                                        rows="15"
                                        id="contactMessage"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                        <div id="message-warning">Error occurred</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!
                            <br />
                        </div>
                    </div>
                </Slide>

                <Slide right duration={1000}>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Address and Phone</h4>
                            <p className="address">
                                {name}
                                <br />
                                {street} <br />
                                {city}, {state} {zip}
                                <br />
                                <span>{phone}</span>
                            </p>
                        </div>
                    </aside>
                </Slide>
            </div>
        </section>
    );
};

export default Contact;