import React, { Fragment } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Addnewuser from './AddNewUser';

import axios from '../axios'


function dataTable() {
    const userdata = useSelector((state) => state.temp.value)
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('');
    const [userTable, setuserTable] = useState([])

    useEffect(() => {
        axios.get('/admin/getUsers').then(data => {
            console.log(data.data)
            setUsers(data.data)
            !search && setuserTable(data.data)
        })
    }, [userdata])


    useEffect(() => {
        setuserTable(users.filter(curr => {
            if (curr.fname.indexOf(search) > -1 || curr.email.indexOf(search) > -1 || curr.companyName.indexOf(search) > -1) {
                return curr
            }
           
        }))
    }, [search])

    return (
        < Fragment >
            <input className='form-control' placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {userTable && userTable.map((curr, i) => {
                        return < tr key={i}>

                            <td>{i + 1}</td>
                            <td>{curr.fname}</td>
                            <td>{curr.email}</td>
                            <td>{curr.companyName}</td>
                            <td><Addnewuser fname={curr.fname} email={curr.email} company={curr.companyName} id={curr._id} /></td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>

        </Fragment >
    )
}


export default dataTable
