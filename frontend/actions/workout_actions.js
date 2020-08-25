import * as WorkoutApiUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT'; 
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS'; 
export const DELETE_WORKOUT = 'DELETE_WORKOUT'; 
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS'; 
export const CLEAR_WORKOUT_ERRORS = 'CLEAR_WORKOUT_ERRORS'; 

export const receiveWorkout = workout => ({
    type: RECEIVE_WORKOUT, 
    workout
})

export const receiveWorkouts = workouts => ({
    type: RECEIVE_WORKOUTS, 
    workouts 
})

export const removeWorkout = workoutId => ({
    type: DELETE_WORKOUT, 
    workoutId
})

export const receiveWorkoutErrors = errors => ({
    type: RECEIVE_WORKOUT_ERRORS,
    errors
})

export const clearWorkoutErrors = () => ({
    type: CLEAR_WORKOUT_ERRORS
})

export const fetchWorkout = workoutId => dispatch => {
    return WorkoutApiUtil.fetchWorkout(workoutId)
        .then(workout => dispatch(receiveWorkout(workout)), errors => dispatch(receiveWorkoutErrors(errors)))
}

export const fetchWorkouts = userId => dispatch => {
    return WorkoutApiUtil.fetchWorkouts(userId)
        .then(workouts => dispatch(receiveWorkouts(workouts)), errors => dispatch(receiveWorkoutErrors(errors)))
}

export const createWorkout = workout => dispatch => {
    return WorkoutApiUtil.createWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)), errors => dispatch(receiveWorkoutErrors(errors)))
}

export const updateWorkout = workout => dispatch => {
    return WorkoutApiUtil.updateWorkout(workout)
        .then(workout => dispatch(receiveWorkout(workout)), errors => dispatch(receiveWorkoutErrors(errors)))
}

export const deleteWorkout = workoutId => dispatch => {
    return WorkoutApiUtil.deleteWorkout(workoutId)
        .then(() => dispatch(removeWorkout(workoutId)), errors => dispatch(receiveWorkoutErrors(errors)))
}