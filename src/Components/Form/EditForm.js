import React, { Fragment, useEffect } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

function EditForm({ updateMember, cancleForm }){
    const {firstName:newFirstName, lastName:newLastName, age:newAge} = updateMember[0]
    let firstName, lastName, age
    useEffect(() => {
        firstName.value = newFirstName
        lastName.value = newLastName
        age.value = newAge
    })
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <Fragment>
            <h2>Edit Member</h2>
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
                <Button 
                    className='bg-primary mr-3 border-0'>Update member
                </Button>
                <Button 
                    className='bg-light text-dark'
                    onClick={() => cancleForm(false)}>Cancle
                </Button>
            </Form>
        </Fragment>
    )
}

export default EditForm