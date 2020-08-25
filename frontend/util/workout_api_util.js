export const fetchWorkout = workoutId => {
    return $.ajax({
        url: `/api/workouts/${workoutId}`, 
        method: 'GET'
    })
}

export const fetchWorkouts = userId => {
    return $.ajax({
        url: `/api/users/${userId}/workouts`,
        method: 'GET'
    })
}

export const createWorkout = workout => {
    return $.ajax({
        url: `/api/workouts`, 
        method: 'POST', 
        data: {workout}
    })
}

export const updateWorkout = workout => {
    return $.ajax({
        url: `/api/workouts/${workout.id}`,
        method: 'PATCH',
        data: { workout }
    })
}

export const deleteWorkout = workoutId => {
    return $.ajax({
        url: `/api/workouts/${workoutId}`, 
        method: 'DELETE'
    })
}