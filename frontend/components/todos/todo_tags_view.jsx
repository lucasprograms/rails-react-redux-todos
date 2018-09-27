import React, { Component } from 'react'

class TodoTagsView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }
  }

  updateName (e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit (createTag) {
    createTag(this.state, this.props.todoId).then(() => {
      this.setState({
        name: ''
      })
    })
  }

  render () {
    const { tags, createTag, errors } = this.props

    return (
      <div>
        <ul>
          <li className="col-12 pl-0 font-weight-bold">Tags:</li>
          {tags.map((tag, idx) => (
            <li className="badge badge-secondary tag mr-1" key={idx}>{tag.name}</li>
          ))}
        </ul>
        <ul className={`alert alert-danger ${errors.tags[0] ? '' : 'd-none'}`}>
          {errors.tags.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <form className="mt-2" onSubmit={(e) => { e.preventDefault(); this.handleSubmit(createTag) } }>
          <div className="form-group">
            <input value={this.state.name} className="form-control" type="text" placeholder="new tag" onChange={(e) => this.updateName(e)}/>
          </div>
        </form>
      </div>
    )
  }
}

export default TodoTagsView

