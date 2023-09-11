import { useState } from "react";
import { nanoid } from "nanoid";
import ProtoTypes from "prop-types"



const Form = () => {

    const [values, setValues] = useState({
        id : nanoid(),
        title: '',
        task: '',
        completed : false,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        })
    }

    return(
        <section>
            <form onSubmit={}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                />
                <label htmlFor="task">Task</label>
                <input 
                    type="text" 
                    name="task"
                    value={values.task}
                    onChange={handleChange}
                />
                <button type="submit">Submit task</button>
            </form>
        </section>
    )
};
export default Form;
