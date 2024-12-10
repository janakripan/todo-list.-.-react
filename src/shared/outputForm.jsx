import React from 'react'

function outputForm() {
  return (
    <form action="">
      <div className='mb-10' >
        <label htmlFor="task" className="block text-sm font-medium text-gray-700">
          Todo
        </label>
        <input
          type="text"
          id="Todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        
      </div>
    </form>
  )
}

export default outputForm
