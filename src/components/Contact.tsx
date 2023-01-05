import React, { FunctionComponent, useEffect, useState } from "react";
import ServicesApi from "../services/get-api-address";
import ServicesService from "../services/get-api-address";

// prepa for form
type Field = {
    value: any;
    error?: string;
    isValid?: boolean;
};
type Form = {
    name: Field;
    email: Field;
    subject: Field;
    content: Field;
};

const Contact: FunctionComponent = () => {
    const [form, setForm] = useState<Form>({
        name: { value: null, isValid: false },
        email: { value: null, isValid: false },
        subject: { value: null, isValid: false },
        content: { value: null, isValid: false },
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = {
            [fieldName]: { value: fieldValue },
            value: fieldValue,
        };
        setForm({ ...form, ...newField });
    };
    useEffect(() => {}, [form]);

    const validateForm = () => {
        let newForm: Form = form;
        
        // Validator name
        if(!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
            const errorMsg: string = 'Votre nom est requis (3-25).';
            const newField: Field = { value: form.name.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ name: newField } };
        } else {
            const newField: Field = { value: form.name.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ name: newField } };
        }

        // Validator email
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email.value)) {
            const errorMsg: string = 'Une address mail valid est requis';
            const newField: Field = { value: form.email.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ name: newField } };
        } else {
            const newField: Field = { value: form.email.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ name: newField } };
        }
        // Validator subject
        if(!/^[a-zA-Zàéè ]{3,25}$/.test(form.subject.value)) {
            const errorMsg: string = 'Un sujet requis (3-25).';
            const newField: Field = { value: form.subject.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ name: newField } };
        } else {
            const newField: Field = { value: form.subject.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ name: newField } };
        }
        // Validator content
        if(!/^[a-zA-Zàéè ]{10,955}$/.test(form.content.value)) {
            const errorMsg: string = 'Un Message est requis.(min 10)';
            const newField: Field = { value: form.content.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ name: newField } };
        } else {
            const newField: Field = { value: form.content.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ name: newField } };
        }
        setForm(newForm);
        return newForm.name.isValid && newForm.email.isValid && newForm.subject.isValid && newForm.content.isValid;
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const isFormValid = validateForm();

        console.log(form);
        let contactData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            content: form.content.value,
        };
        ServicesApi.sendMessage(contactData).then((res) => {
            console.log(res);
            setForm({
                name: { value: "", isValid: false },
                email: { value: "", isValid: false },
                subject: { value: "", isValid: false },
                content: { value: "", isValid: false },
            });
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row mt-1">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Localisation:</h4>
                                <p>92 Bd Paul Claudel 13009 MARSEILLE</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>RivkaNeurofeedback@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Mobile:</h4>
                                <p>+33 6 97 04 79 51</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form
                            onSubmit={handleSubmit}
                            className="php-email-form"
                        >
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleInputChange}
                                        value={form.name.value}
                                        className="form-control"
                                        id="name"
                                        placeholder="Votre Nom"
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Votre Email"
                                        onChange={handleInputChange}
                                        value={form.email.value}
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    onChange={handleInputChange}
                                    value={form.subject.value}
                                    placeholder="Sujet"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    // type="text"
                                    className="form-control"
                                    name="content"
                                    id="content"
                                    onChange={handleInputChange}
                                    value={form.content.value}
                                    placeholder="Message"
                                />
                            </div>

                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                        {/* error */}
                        {form.name.error && (
                            <div className="card-panel red accent-1">
                                {form.name.error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
