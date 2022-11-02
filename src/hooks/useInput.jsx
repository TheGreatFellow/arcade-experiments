import { useState, useEffect } from 'react'

export const useInput = () => {
    const [state, setState] = useState({})
    const [keys, setKeys] = useState({})

    const onKeydown = (event) => {
        setKeys((keys) => ({ ...keys, [event.code]: true }))
    }

    const onKeyup = (event) => {
        setKeys((keys) => ({ ...keys, [event.code]: false }))
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeydown)
        window.addEventListener('keyup', onKeyup)
        return () => {
            window.removeEventListener('keydown', onKeydown)
            window.removeEventListener('keyup', onKeyup)
        }
    }, [])

    useEffect(() => {
        setState(keys)
    }, [keys])

    return state
}
