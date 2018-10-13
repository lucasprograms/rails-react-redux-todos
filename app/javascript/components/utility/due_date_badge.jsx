import React from 'react'
import moment from 'moment'

const getDueDateBadgeColor = (date) => {
  if (moment(date).isBefore(moment.now())) {
    return 'danger'
  } else if (moment(date).isBetween(moment(), moment().add(2, 'days'))) {
    return 'warning'
  } else {
    return 'success'
  }
}

export default ({ dueDate }) =>
  dueDate ? <p className={`badge badge-${getDueDateBadgeColor(dueDate)}`}>Due {moment(dueDate).calendar()}</p> : null

