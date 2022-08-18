import React from 'react'
import GoalItem from './GoalItem'

const GoalList = ({ goals }) => {

    const listGoals = () => {
        if (goals.length === 0) {
            return <h3>You have not set any goals</h3>
        }
        return goals.map((goal) => {
            return <GoalItem key={goal._id} goal={goal} />
        })
    }
    return (
        <div className='goals'>
            {listGoals()}
        </div>
    )
}

export default GoalList