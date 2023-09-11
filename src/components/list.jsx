import PropTypes from "prop-types";
import "./list.css";

const List = (props) => {
    const { taskList, completed, deleted } = props;

    return (
        <section>
            {taskList.map((i) => (
                <div key={i.id} className="list__container">
                    <h4 className="list__title">{i.title}</h4>
                    <p className="list__task">{i.task}</p>
                    <p className={i.completed ? "list__completed" : "list__ongoing"}>
                        {i.completed ? "Completed" : "Ongoing"}
                    </p>
                    <button onClick={() => deleted(i.id)}>Delete task</button>
                    <button onClick={() => completed(i.id)}>complete task</button>
                </div>
            ))}
        </section>
    );
};

List.propTypes = {
    taskList: PropTypes.array,
    completed: PropTypes.func,
    deleted: PropTypes.func,
};

export default List;
