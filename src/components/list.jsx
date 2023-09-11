import PropTypes from "prop-types";

const List = (props) => {
    const { taskList, completed, deleted } = props;

    return (
        <section>
            {taskList.map((i) => (
                <div key={i.div}>
                    <h4>{i.title}</h4>
                    <p>{i.task}</p>
                    <p>{i.completed ? "Completed" : "Ongoing"}</p>
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
