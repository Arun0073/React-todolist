import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      {task.isEdited ? (
        <Accordion style={{ backgroundColor: "#8758ff", color: "#fff" }}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              onClick={() => toggleComplete(task.id)}
              className={`${task.completed ? "completed" : ""}`}
            >
              {task.task}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Last updated:{" "}
              {task.timestamp
                ? new Date(task.timestamp).toLocaleString() // displaying the time when user updated the task
                : "N/A"}
            </Typography>

            {task.prevTasks.map((prevTask, index) => ( // displaying previous tasks to user before updation
              <Typography key={index}>
                Previous Task: {prevTask.task}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ) : (
        <p
          onClick={() => toggleComplete(task.id)} //function to update the task when completed
          className={`${task.completed ? "completed" : ""}`}
        >
          {task.task}
        </p>
      )}
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{ cursor: "pointer" }}
          onClick={() => editTodo(task.id)} // function to edit the task
        />
        <FontAwesomeIcon 
          icon={faTrash} 
          onClick={() => deleteTodo(task.id)} //function to delete the task
/>
      </div>
    </div>
  );
};
