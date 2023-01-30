import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { classname, placeholder, onChange } = this.props;
    return (
      <div>
        <input
          className={classname}
          type='search'
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default SearchBox;
