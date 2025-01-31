import React, { useState } from 'react'
import axios from 'axios'

function Create() {

        const [task, setTask] = useState()
    
        const handleAdd = () => {
            axios.post('http://localhost:3001/add', {task: task})
            .then(result => {
                location.reload()
            })
            .then(err => console.log(err))
        }

    return (
        <div className="flex flex-col sm:flex-row justify-center py-3 space-y-2 sm:space-y-0 sm:space-x-2">
            <input
                type="text"
                onChange={(e) => setTask(e.target.value)}
                className="w-[300px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter todo..."
            />
            <button
                onClick={handleAdd}
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Add
            </button>
        </div>
    )
}

export default Create
