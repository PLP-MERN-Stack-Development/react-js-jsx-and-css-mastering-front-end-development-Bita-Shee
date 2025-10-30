import { useState, useEffect } from 'react';

export default function Home() {
    const [tasks, setTasks] = useState([]);

    async function loadData() {
        try {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <main>
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Task Manager</h1>
                <p className="text-lg">Manage your tasks efficiently and stay organized!</p>
            </div>
        </main>
    );
}