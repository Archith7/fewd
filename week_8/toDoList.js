import { useState } from 'react';
import { Trash2, PlusCircle, CheckCircle, Circle } from 'lucide-react';

export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }]);
      setNewTaskText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">My To-Do List</h1>
      
      <div className="flex w-full mb-6">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg flex items-center"
        >
          <PlusCircle size={20} className="mr-1" /> Add
        </button>
      </div>
      
      {tasks.length === 0 ? (
        <p className="text-gray-500 italic">No tasks yet. Add one above!</p>
      ) : (
        <ul className="w-full space-y-2">
          {tasks.map(task => (
            <li 
              key={task.id} 
              className={`flex items-center justify-between p-3 border rounded-lg ${
                task.completed ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="flex items-center">
                <button 
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="mr-3 text-blue-500 hover:text-blue-700"
                >
                  {task.completed ? 
                    <CheckCircle size={20} className="text-green-500" /> : 
                    <Circle size={20} />
                  }
                </button>
                <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {task.text}
                </span>
              </div>
              <button 
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {tasks.length > 0 && (
        <div className="w-full mt-4 text-sm text-gray-500">
          {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
        </div>
      )}
    </div>
  );
}

