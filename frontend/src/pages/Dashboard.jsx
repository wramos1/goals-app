import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';
import { getGoals, resetGoals } from '../features/goals/goalSlice';
import Spinner from '../components/Spinner';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        }

        if (user) {
            dispatch(getGoals())
        }

        return () => {
            dispatch(resetGoals())
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>Goals Dashboard</p>
            </section>

            <GoalForm />
            <GoalList goals={goals} />
        </>
    )
}

export default Dashboard