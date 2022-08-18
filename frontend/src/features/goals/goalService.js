import axios from 'axios';

const API_URL = '/api/goals/'

//Create goal 
const getUserGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}
//Create goal 
const createGoal = async (goal, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, goal, config)

    return response.data
}

const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}

const goalService = {
    createGoal,
    getUserGoals,
    deleteGoal
}

export default goalService