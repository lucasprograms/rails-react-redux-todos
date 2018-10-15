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
  dueDate ? <small className="text-secondary">{moment(dueDate).calendar()}</small> : null

