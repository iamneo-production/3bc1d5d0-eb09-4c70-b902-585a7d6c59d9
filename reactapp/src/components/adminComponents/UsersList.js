import React from 'react'
import { useEffect , useState } from 'react';
import axios from 'axios';
import '../../common/Main.css';

const UsersList = () => {

    const baseURL= "http://localhost:8080"

    const [infos, setInfos] = useState([]);

    useEffect(() => {
        axios.get(baseURL+ `/getAllUsers`).then((response) => {
            setInfos(response.data);        
        });
    }, []);
    // console.log(infos);


    return (
        <div>
            <div className="userListContainer">
                <h4>User List</h4>
                <table className="userListTable">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            infos.map(
                                info =>
                                <tr key={info.id}>
                                    { info.id !== 1? 
                                        <> 
                                            <td> {info.id} </td>
                                            <td> {info.username} </td>
                                            <td> {info.email} </td>
                                            <td> <button className="userListActionBtn">Edit</button> </td>
                                            <td> <button className="userListActionBtn">Delete</button> </td>
                                        </>
                                    : null
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default UsersList;