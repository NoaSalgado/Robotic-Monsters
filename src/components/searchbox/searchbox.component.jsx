import { Component } from 'react';
import './searchbox.styles.css';

class SearchBox extends Component {
  render() {
    const { className, placeholder, onChange } = this.props;
    return (
      <div>
        <input
          className={className}
          type='search'
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default SearchBox;
