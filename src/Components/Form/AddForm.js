import React, { Fragment } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

function AddForm({ getMember }){
    let firstName, lastName, age
    const handleSubmit = e => {
        e.preventDefault()
        getMember({
            firstName: firstName.value,
            lastName: lastName.value,
            age: age.value
        })
            firstName.value = ''
            lastName.value = ''
            age.value = ''
    }    
    return (
        <Fragment>
            <h2>Add Member</h2>
            <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>First Name: </Label>
                        <Input 
                        required
                        type='text' 
                        innerRef={el => firstName = el}
                    />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name: </Label>
                        <Input 
                            required
                            type='text' 
                            innerRef={el => lastName = el}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Age: </Label>
                        <Input 
                            required
                            type='text' 
                            innerRef={el => age = el}
                        />
                    </FormGroup>
                    <Button className='bg-primary border-0'>Submit</Button>
                </Form>
            </Fragment>
        )
    }

export default AddForm