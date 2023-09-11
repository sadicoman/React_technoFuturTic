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

    const handleDelete = (id) => {
        // l'id egal a item.id est supprimé
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
    };

    const handleComplete = (id) => {
        const updatedList = list.map((item) => {
            if (item.id === id) {
                return { ...item, completed: true };
            } else {
                return item;
            }
        });
        setList(updatedList);
    };

    const handleUpdate = (val) => {
        setList([...list, val]);
    };

    console.log(list.map((i) => i.id));

    return (
        <section>
            <Form updateList={handleUpdate} />
            <List taskList={list} deleted={handleDelete} completed={handleComplete} />
        </section>
    );
};
export default Task;
