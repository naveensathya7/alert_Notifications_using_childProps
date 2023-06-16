// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <div className="icon-status">
        <AiFillCheckCircle className="success-icon" />
        <h2 className="success-heading">Success</h2>
      </div>
      <p className="description">You can access all the files in the folder</p>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <div className="icon-status">
        <RiErrorWarningFill className="error-icon" />
        <h2 className="error-heading">Error</h2>
      </div>
      <p className="description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="icon-status">
        <MdWarning className="warning-icon" />
        <h2 className="warning-heading">Warning</h2>
      </div>
      <p className="description">
        Viewers of this file can see comments and suggestions
      </p>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <div className="icon-status">
        <MdInfo className="info-icon" />
        <h2 className="info-heading">Info</h2>
      </div>
      <p className="description">Anyone on the internet can view these files</p>
    </Notification>
  )

  return (
    <div className="notifications-bg">
      <h1>Alert Notifications</h1>
      {renderSuccessNotification()}
      {renderErrorNotification()}
      {renderWarningNotification()}
      {renderInfoNotification()}
    </div>
  )
}
export default AlertNotifications
