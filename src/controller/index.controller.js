let taskList = [
    {   
        "id": 1,
        "name": "name of task",
        "done": false
    }
]

export const watchTask = (req, res) => {
    res.status(200).send(taskList);
}

export const watchTaskForId = (req, res) => {
    try {
        const taskFound = taskList.filter(taskList => taskList.id === parseInt(req.params.id));
        res.status(200).send(taskFound);

        if (!taskFound) return res.status(404).json({
            message: "Error, task not found"
        })
    } catch (error) {
        console.log("Error al agregar tarea", error);
        res.status(500).json({
            message: "Error al agregar tarea"
        })
    }
}

export const createTask = (req, res) => {
    try {
        const newTask = {...req.body, id: taskList.length + 1};
        taskList.push(newTask);
        console.log("tarea agregada");
        res.status(200).send(taskList);
    } catch (error) {
        console.log("error al agregar tarea", error);
        res.status(500).json({
            message: "error al agregar tarea"
        });
    }  
}

export const updateTask = (req, res) => {
    try {
        const newData = req.body;
        const taskFound = taskList.find(taskList => taskList.id === parseInt(req.params.id))
        if (!taskFound) return res.status(404).json({
            message: "Error, task not found"
        })

        taskList = taskList.map(
            taskList => taskList.id === parseInt(req.params.id) ? {...taskList, ...newData}:taskList
            );

        console.log("Tarea actualizada", taskList);
        res.status(200).send(taskList)

    } catch (error) {
        console.log("Error al actualizar tarea", error);
        res.status(500).json({
            message: "Error al actualizar tarea"
        })
    }
}

export const deleteTask = (req, res) => {
    try {
        
        const taskFound = taskList.find(taskList => taskList.id === parseInt(req.params.id))
        if (!taskFound) return res.status(404).json({
            message: "Error, task not found"
        })

        taskList = taskList.filter(taskList => taskList.id !== parseInt(req.params.id));

        console.log("nueva lista", taskList);
        res.status(200).send(taskList);

    } catch (error) {
        console.log("Error al eliminar tarea", error);
        res.status(500).json({
            message: "Error al eliminar tarea"
        })
    }
}