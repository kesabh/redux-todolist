export const addTodo = (data) => {
    return {
        type : "ADD" , 
        payload : {
            id : new Date().getTime().toString() ,
            data : data
        }
    }
}

export const deleteTodo = (id)=>{
    return {
        type : "DEL",
        payload : {
            id : id 
        }
    }
}

export const removeAllTodos = () =>{
    return {
        type : "REMOVE_ALL"
    }
}