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
    createTag({ name: this.state.name }, this.props.todoId).then(() => {
      this.setState({
        name: ''
      })
    })
  }

  handleTagClick (tag) {
    this.props.filterByTag(tag)

  }

  render () {
    const { tags, createTag, errors } = this.props

    return (
      <div>
        <h6 className="col-12 pl-0 mb-0 font-weight-bold">Tags:</h6>
        {tags.map((tag, idx) => (
            <a href="#" key={idx} className="font-weight-normal text-monospace badge badge-secondary tag mr-1"
                onClick={() => this.handleTagClick(tag) }
            >
              {tag.name}
            </a>
        ))}
        <ul className={`alert alert-danger pt-1 pb-1 mt-1 mb-1 ${errors.tags[0] ? '' : 'd-none'}`}>
          {errors.tags.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <form className="mt-2" onSubmit={(e) => { e.preventDefault(); this.handleSubmit(createTag) } }>
          <div className="form-group">
            <input 
              value={this.state.name}
              className="form-control"
              type="text"
              placeholder="new tag"
              onChange={(e) => this.updateName(e)}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default TodoTagsView

