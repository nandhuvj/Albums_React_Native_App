import React,{Component} from 'react';
import ReactNative,{Text,View,ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails'


export default class AlbumList extends Component{

state =  {albums:[]}

componentWillMount(){
axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res =>{
    this.setState({albums:res.data});
})
}

getAlbum(){
    return this.state.albums.map(album =>
<AlbumDetails key= {album.title}album ={album}/>
    )
    }

render(){

    return <ScrollView>{this.getAlbum()}</ScrollView>
}


}