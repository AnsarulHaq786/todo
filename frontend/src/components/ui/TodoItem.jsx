import React, { useState } from "react";
import checkedIcon from "../../assets/checked-icon.svg";
import uncheckedIcon from "../../assets/unchecked-icon.svg";
import DeleteTodo from "./DeleteTodo";
import ShowTodo from "./ShowTodo";
import UpdateTodoDialog from "../update-todo/UpdateTodoDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordian";

function TodoItem({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);
  const date=todo.end_date.split('T')[0];
  
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={todo.id}>
        <div className="w-[90%] h-auto m-8 p-4 bg-[#1e293b] rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {completed ? (
                <>
                  <button onClick={()=>setCompleted(!completed)}>
                    <img src={checkedIcon} alt="checked item" className="cursor-pointer hover:scale-104 w-6" />
                  </button>
                  <div className="text-xl line-through">{todo.title}</div>
                </>
              ) : (
                <>
                  <button onClick={()=>setCompleted(!completed)}>
                    <img src={uncheckedIcon} alt="unchecked item" className="cursor-pointer hover:scale-104 w-6" />
                  </button>
                  <div className="text-xl">{todo.title}</div>
                </>
              )}
            </div>
        
            <div className="flex items-center justify-between gap-5">
              <UpdateTodoDialog todo={todo}/>
              <DeleteTodo todo={todo}/>
              <AccordionTrigger>
                <ShowTodo todo={todo}/>
              </AccordionTrigger>
            </div>
          </div>
          <AccordionContent className="bg-[#02344d] p-5 rounded-b-2xl text-[#d1d5dc] space-y-3 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#a0aec0]">{date}</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0ea5e9] text-[#02344d] uppercase tracking-wide">
                {todo.priority}
              </span>
            </div>
            <p className="text-gray-200 tex-lgtext-base leading-relaxed whitespace-pre-line">
              {todo.description}
            </p>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default TodoItem;