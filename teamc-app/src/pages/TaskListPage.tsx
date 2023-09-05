import TaskComponent from "../components/TaskComponent";

const TaskListPage = () => {
  return (
    <div>
      <h1>TaskListPage</h1>
      <TaskComponent
        id={1}
        title={"Reactわからん"}
        userName={"細谷"}
        skillSet={["React", "Docker"]}
        taskDate={new Date()}
        concernDesc={"piyopiyo"}
      />
    </div>
  );
};

export default TaskListPage;
