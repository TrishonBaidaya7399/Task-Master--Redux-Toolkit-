// import PropTypes from 'prop-types';

import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";
import { useAddTaskMutation } from "../../redux/api/taskApi/taskApi";
import { toast } from "react-toastify";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [addTask, { isLoading, error }] = useAddTaskMutation(0);
  const onSubmit = (data) => {
    console.log(data);
    addTask(data);
    onCancel();
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  if (error) {
    toast.error(error);
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add a new task">
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              className="text-black pl-2 rounded-md w-full"
              name="title"
              id="title"
              {...register("title", { required: true })}
            />
          </div>
          {errors.title && (
            <p className="text-sm text-white bg-red-500 w-full py-1 px-3 rounded-full">
              * Title is required.
            </p>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="deadLine">Start Date</label>
            <input
              className="text-black pl-2 rounded-md w-full"
              name="startDate"
              id="startDate"
              type="date"
              {...register("startDate", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="endDate">End Date</label>
            <input
              className="text-black pl-2 rounded-md w-full"
              name="endDate"
              id="endDate"
              type="date"
              {...register("endDate", { required: true })}
            />
          </div>
          {errors.endDate && (
            <p className="text-sm text-white bg-red-500 w-full py-1 px-3 rounded-full">
              * Deadline is required.
            </p>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="status">Status</label>
            <select
              className="text-black pl-2 rounded-md w-full"
              name="status"
              id="status"
              {...register("status", { required: true })}
            >
              <option defaultValue value="todo">
                To Do
              </option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="priority">Priority</label>
            <select
              className="text-black pl-2 rounded-md w-full"
              name="priority"
              id="priority"
              {...register("priority", { required: true })}
            >
              <option defaultValue value="high">
                High
              </option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          {errors.priority && (
            <p className="text-sm text-white bg-red-500 w-full py-1 px-3 rounded-full">
              * Priority is required.
            </p>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="assignedTo">Assigned To</label>
            <select
              className="text-black pl-2 rounded-md w-full"
              name="assignedTo"
              id="assignedTo"
              {...register("assignedTo", { required: true })}
            >
              <option defaultValue value="Trishon Baidaya">
                Trishon Baidaya
              </option>
              <option value="Joy Saha">Joy Saha</option>
              <option value="Suvojit Chakraborti">Suvojit Chakraborti</option>
              <option value="Shovon">Shovon</option>
              <option value="Saif Uddin">Saif Uddin</option>
              <option value="MD. Shakil">MD. Shakil</option>
              <option value="Sahittya Shill">Sahittya Shill</option>
              <option value="MD. Shorif">MD. Shorif</option>
            </select>
          </div>
          {errors.assignedTo && (
            <p className="text-sm text-white bg-red-500 w-full py-1 px-3 rounded-full">
              * Assigning a name is required.
            </p>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="text-black pl-2 rounded-md w-full h-40"
              name="description"
              id="description"
              {...register("description", { required: true })}
            />
          </div>
          {error && (
            <p className="text-red-500 text-md font-semibold">{error}</p>
          )}
          <div className="flex gap-4 mx-auto pt-4">
            <button
              disabled={isLoading}
              onClick={onCancel}
              type="button"
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

AddTaskModal.propTypes = {};

export default AddTaskModal;
