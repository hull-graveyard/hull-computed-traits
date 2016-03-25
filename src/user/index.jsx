import React, { Component, PropTypes } from 'react';
import SearchForm from '../ui/search-form';
import { Col } from 'react-bootstrap';
import Area from '../ui/area';

import { getUserPayload } from '../../common/utils';

export default class UserPane extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.object,
    userSearch: PropTypes.string
  }

  render() {
    const { className, sm, loading, onSearch, onChange, value, userSearch, error } = this.props;

    const { user, segments } = value || {};

    const search = user && user.email;

    return <Col className={className} sm={sm}>
      <SearchForm loading={loading} error={error} userSearch={search} onSubmit={onSearch} />
      <Area value={getUserPayload(user, segments)} type='info' onChange={onChange}/>
    </Col>;
  }
}
