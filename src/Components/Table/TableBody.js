import React from 'react'
import { Button } from 'reactstrap'

function TableBody({ members, getEditIndex, getRemoveIndex }){
    const member = members.map((member, index) => (
            <tr key={index}>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.age}</td>
                <td><Button  
                        className='bg-warning border-0 mr-3'
                        onClick={() => getEditIndex(member, index)}> Edit
                    </Button>
                    <Button 
                        className='bg-danger border-0'
                        onClick={() => getRemoveIndex(index)}>Delete
                    </Button>
                </td>
            </tr>
    ))
    return (
        <tbody>
            { member }
        </tbody>
    )
}

export default TableBody