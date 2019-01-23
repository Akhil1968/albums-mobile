import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import AlbumDetail from './AlbumDetail';
import { GetAlbumsAction } from '../actions/AlbumActions';

class AlbumList extends Component {

  componentWillMount() {
    this.props.GetAlbumsAction();
  }

  renderAlbums() {
    return this.props.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.props);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
/* mapStateToProps is a function that returns an object that has mapping of store values*/
const mapStp = state => {
  return {
      albums: state.alb.albums,
      loading: state.alb.loading
  };
}

/* mapDispatchToProps is an object that has mapping for action creator functions*/
const mapDtp =  {
  GetAlbumsAction: GetAlbumsAction
};

export default connect(mapStp, mapDtp)(AlbumList);
