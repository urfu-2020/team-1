import React from 'react';
import {TextArea} from "../../dumb/TextArea/TextArea";
import "./SendForm.css"
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';

interface SendMessageFormProps {
    sender: string,
    sendDate: Number,
    getter: string,
    message: string
}

export function SendForm() {
    const initialValues: SendMessageFormProps = { sender: '', sendDate: Date.now(), getter: '', message: '' };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            <Form className={"main-window"}>
                <div className={"form-container"}>
                    <TextArea />
                    <button type="submit" className={"app-button send"}>Отправить</button>
                </div>
            </Form>
    </Formik>
    );
}
