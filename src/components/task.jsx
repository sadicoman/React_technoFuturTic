import { useState } from "react";
import Form from "./form";
import List from "./list";
import { nanoid } from "nanoid";

const listItems = [
    { id: nanoid(), title: "Laundry", task: "Do the laundry", completed: false },
    { id: nanoid(), title: "Formation", task: "Prepare a React", completed: false },
    { id: nanoid(), title: "Hobby", task: "Play some BG3", completed: false },
    { id: nanoid(), title: "Music", task: "Listen to Emilie", completed: false },
];

const Task = () => {
    const [list, setList] = useState(listItems);

    return (
        <section>
            <Form />
            <List taskList={list} />
        </section>
    );
};
export default Task;
