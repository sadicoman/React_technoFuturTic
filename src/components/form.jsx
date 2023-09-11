import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const Form = (props) => {
    const [values, setValues] = useState({
        id: "",
        title: "",
        task: "",
        completed: false,
    });

    const { updateList } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
            id: nanoid(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateList(values);
        setValues({ id: "", title: "", task: "", completed: false });
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
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
    );
};

Form.propTypes = {
    updateList: PropTypes.func,
};

export default Form;
