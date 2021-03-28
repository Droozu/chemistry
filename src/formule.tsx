import React from "react";
import { useFormik } from "formik"

const Formule = () => {
    const formik = useFormik({
        initialValues: {
            formula: ''
        },
        onSubmit: values => console.log(values)
    })

    return (
        <section>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="formula">Write formula</label>
                <input type="text" id="formula" name="formula" value={formik.values.formula} onChange={formik.handleChange} />
                <button type="submit"/>
            </form>
        </section>
    )
}

export default Formule