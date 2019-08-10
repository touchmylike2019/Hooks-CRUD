import React from 'react'
import { Table } from 'reactstrap'
import TableHead from './TableHead'
import TableBody from './TableBody';

function TableForm({ showMembers, editMember, removeMember }){
    return (
        <Table hover className='mt-4'>
            <TableHead />
            <TableBody 
                members={showMembers}
                getEditIndex={editMember}
                getRemoveIndex={removeMember}
            />
        </Table>
    )
}

export default TableForm