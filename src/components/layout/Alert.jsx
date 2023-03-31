import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { BiErrorAlt, BiParty } from 'react-icons/bi'

const Alert = () => {
    const { alert } = useContext(AlertContext)

  return (
    <>
        {alert && 
            <div className={`alert alert-${alert.type} shadow-lg`}>
                <div>
                    {alert.type === 'error' && <BiErrorAlt className="stroke-current flex-shrink-0 h-6 w-6" />}
                    {alert.type === 'success' && <BiParty className="stroke-current flex-shrink-0 h-6 w-6" />}
                    <p>{alert.msg}</p>
                </div>
            </div>
        }
    </>
  )
}

export default Alert
