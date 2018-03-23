import React from 'react';

class Form extends React.Component {

    render() {
      return (
        <form onSubmit={this.props.getData}>
            <input type="text" name="league" placeholder="Type in league name here..." />
          <button>Go!</button>
        </form>
      );
    }
  }

export default Form;
