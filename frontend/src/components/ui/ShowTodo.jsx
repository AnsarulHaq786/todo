import { useTodo } from "@/hooks/useTodo";
import dropdownIcon from "../../assets/dropdown-icon.svg";

function ShowTodo({todo}) {
  const { showTask } = useTodo();
  
  return (
    <div onClick={()=> showTask(todo.id)} className="cursor-pointer hover:bg-[#0f172a] hover:rounded-lg hover:scale-111">
      <img src={dropdownIcon} alt="show" className="w-10"/>
    </div>
  );
}
export default ShowTodo;
