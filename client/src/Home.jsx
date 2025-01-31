import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import {BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill} from 'react-icons/bs'


function Home() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="flex flex-col justify-center container mt-14 mx-auto p-4">
            <h2 className="text-2xl flex justify-center sm:text-3xl md:text-4xl font-bold mb-4">Todo List</h2>
            <Create />
            {
                todos.length === 0
                ?
                <div className="text-center text-gray-500">
                    <h2 className="text-xl sm:text-2xl md:text-3xl">No Records</h2>
                </div>
                :
                todos.map(todo => (
                    <div className='flex justify-center'>
                        <div className="bg-blue-100 w-[450px] flex justify-between shadow-md rounded-lg p-4 mb-4 ">
                            <div className=' flex items-center w-[490px]' onClick={() => handleEdit(todo._id)}>
                                {todo.done ?
                                    <BsFillCheckCircleFill className=' mr-1.5 text-[15px]'/>
                                    :
                                    <div>
                                        <BsCircleFill className=' mr-1.5 text-[15px]'/>
                                    </div>
                                }
                                <p className={todo.done ?'line-through': 'text-[18px]'}>{todo.task}</p>
                            </div>
                            <div>
                                <span><BsFillTrashFill className='mt-1.5 mr-1.25 mb-0 ml-1 text-[15px] cursor-pointer' onClick={() => handleDelete(todo._id)}/></span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home