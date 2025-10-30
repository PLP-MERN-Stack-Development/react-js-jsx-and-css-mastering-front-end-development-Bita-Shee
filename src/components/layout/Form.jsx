import { useState } from "react";
import Button from "../ui/Button";

export default function Form({ onSubmit }) {
       const [form, setForm] = useState({
            title: '',
            description: '',
        });
    
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm(f => ({ ...f, [name]: value }))
            };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            if( !form.title || !form.description ) {
                alert("Please fill in all fields");
                return;
            }
            onSubmit(form);
            setForm({ title: '', description: '' });
        };
    

    return ( 
         <form onSubmit={handleSubmit} className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Add Task</h1>
            <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Task Title"
                className="border p-2 w-full mb-4"
            />
            <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Task Description"
                className="border p-2 w-full mb-4"
            ></textarea>
            <Button type="submit" variant="secondary">Submit</Button>
        </form> 
    );
}