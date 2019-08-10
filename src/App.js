import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import Header from './Components/Header/'
import Table from './Components/Table/'
import AddForm from './Components/Form/AddForm';
import EditForm from './Components/Form/EditForm';

function App() {
    const [members, setMembers] = useState([])
    const [updateMember, setUpdateMember] = useState([])
    const [showEditForm, setShowEditForm] = useState(false)
    const getMember = member => {
        setMembers([...members, member])
    }
    const editMember = (fieldMember, editIndex) => {
        setShowEditForm(true)
        setUpdateMember([...fieldMember])
    }
    
    const removeMember = removeIndex => {
        setMembers(members.filter((member, index) => removeIndex !== index))
    }
    const cancleForm = status => {
        setShowEditForm(status)
    }
    useEffect(() => {
       console.log('Members: ', members)
       console.log('UpdateMember: ', updateMember)
       console.log('showEditForm: ', showEditForm)
    })
    return (
        <Container>
            <Header />
            <Table 
                showMembers={members}
                editMember={editMember}
                removeMember={removeMember}
            />
            {
                showEditForm ? 
                <EditForm 
                    updateMember={updateMember}
                    cancleForm={cancleForm}
                />
                :
                <AddForm getMember={getMember} />
            }
        </Container>
    )
}

export default App
