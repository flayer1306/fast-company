import React, { useState } from 'react';
import api from '../api'




const Users = () => {
    const [ users, setUsers ] = useState(api.users.fetchAll())
    // console.log(users)

    // users.map((user) => {
    //     console.log(...user.qualities)
    // })

    const renderBadgeQualities = ([{ color, name, _id }]) => {
    let colorBadge =`badge bg-${color}`
        return (
                    <span key={_id} className={colorBadge}>{name}</span>
                )

        }
// const Qualities = () => {
//
//           return   users.forEach((user) => {
//              for (const quality of user.qualities) {
//                  console.log(renderBadgeQualities(quality))
//              }
//
//          } )
//
// }





      // return users.forEach((user) =>
      //       user.qualities.map((quality) =>
      //       {
      //           console.log(quality.name)
      //       }
                // (
                //     <span className='badge bg-primary'>{quality.name}</span>
                // )
        //     )
        // )


    // return  users.map((user) =>
            // user.qualities.map((quality) =>

                    // console.log(user.qualities)

                    // (
                    //     <span className='badge bg-primary'>{user.qualities[0].name}</span>
                    // )

    //         // )
    // )
    // }



    const renderUsers = () => {

        return users.map((user) => (

            <tr key={user._id}>
                <td scope="row">{user.name}</td>
                <td>{renderBadgeQualities(user.qualities)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td><button className='btn btn-primary btn-sm m-2'>Delete</button></td>
            </tr>
        ))
    }
    return (
        <>
            <h1>Users</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                </tr>
                </thead>
                <tbody>
                {renderUsers()}
                </tbody>
            </table>
        </>
    )
}

export default Users;