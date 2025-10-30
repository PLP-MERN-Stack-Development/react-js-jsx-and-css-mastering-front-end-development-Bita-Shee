import React from "react";
import Button from "../ui/Button";

export default function Card({ title, content, completed, onMarkDone, onDelete }) {
  return (
    <div
      className={`border rounded shadow p-4 bg-white dark:bg-slate-800 ${
        completed ? "opacity-70" : ""
      }`}
    >
      <h2
        className={`text-xl font-bold mb-2 ${
          completed ? "line-through text-gray-500" : "text-gray-900 dark:text-gray-100"
        }`}
      >
        {title}
      </h2>

      <p className={`${completed ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-300"}`}>
        {content}
      </p>

      <div className="flex gap-2 mt-4">
        <Button
          variant="primary"
          onClick={onMarkDone}
          disabled={completed}
        >
          {completed ? "Completed" : "Mark as Done"}
        </Button>

        <Button
          variant="danger"
          onClick={onDelete}
        >
          Delete Task
        </Button>
      </div>
    </div>
  );
}
