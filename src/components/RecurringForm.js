import React, { useState } from 'react'
import { camelToSentence } from 'utils/camelToSentenc'

const RecurringForm = () => {

    const initialInputs = {
        startDate: '',
        endDate: '',
        frequency: "daily",
        dollarAmount: 5,
        currency: "usd"
    }

    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const fields = () => {
        const inputs = []
        for (const key in initialInputs){
            inputs.push(
                {
                    id: key,
                    name: camelToSentence(key)
                }
            )
        }
        return inputs
    }

    console.log(fields())


    return (
        <form>
            {
                fields().map(field => 
                    <>
                        <label htmlFor={field.id}>{field.name}</label>
                        <input
                            id={field.id}
                            name={field.id}
                            value={inputs[field.id]}
                            onChange={handleChange}
                        />
                    </>
                )
            }
            
        </form>
    )
}

export default RecurringForm
