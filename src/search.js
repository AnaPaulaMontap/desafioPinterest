import React, { Component } from 'react';
import Unsplash from 'unsplash-js';
import './search.css'

const unsplash = new Unsplash({
    applicationId: "d623c1e5abbee5feac5a2a329aefbdaa3d31addef1ca2d5fe3cc36be4ceb4b1a",
    secret: "d9697c3a0d27cc2b2efc0d2702c773c34d5b25f0b9e1a91240e1ff0b842fc8fc"
  });

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            images:[],
            img0_4: [],
            img4_8: [],
            img8_12: [],
            img12_16: [],
            img16_20: [],
           
        };

        
    }

    componentDidMount () {

        unsplash.photos.listPhotos(1, 20, "latest")
        .then(response =>{
            return response.json()
        })
        .then(json => {
           const results = json
           
           this.setState({
            ...this.state,
               images:results
           })
        })
        .then(json =>{
            let img1 = []
            let img2 = []
            let img3 = []
            let img4 = []
            let img5 = []

        for (let i=0; i<4; i++){
            let imgRandom = this.state.images[i]
            img1.push(imgRandom.urls.thumb)
        }
        this.setState({
            ...this.state,
                img0_4: img1
           })

        for (let i=4; i<8; i++){
            let imgRandom1 = this.state.images[i]
            img2.push(imgRandom1.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img4_8: img2
           })
        
        for (let i=8; i<12; i++){
            let imgRandom2 = this.state.images[i]
            img3.push(imgRandom2.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img8_12: img3
           })
        
        for (let i=12; i<16; i++){
            let imgRandom3 = this.state.images[i]
            img4.push(imgRandom3.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img12_16: img4
           })
           
           for (let i=16; i<20; i++){
            let imgRandom4 = this.state.images[i]
            img5.push(imgRandom4.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img16_20: img5
           })
        })                  
    }
    componentDidUpdate (){
        if( !this.props.recharge ){
            return false
        }
        else{
        
        unsplash.photos.listPhotos(2, 20, "latest")
        .then(response =>{
            return response.json()
        })
        .then(json => {
           const results = json
           
           this.setState({
            ...this.state,
               images:results
           })
        })
        .then(json =>{
            let img1 = []
            let img2 = []
            let img3 = []
            let img4 = []
            let img5 = []

        for (let i=0; i<4; i++){
            let imgRandom = this.state.images[i]
            img1.push(imgRandom.urls.thumb)
        }
        this.setState({
            ...this.state,
                img0_4: this.state.img0_4.concat(img1)
           })

        for (let i=4; i<8; i++){
            let imgRandom1 = this.state.images[i]
            img2.push(imgRandom1.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img4_8: this.state.img4_8.concat(img2)
           })
        
        for (let i=8; i<12; i++){
            let imgRandom2 = this.state.images[i]
            img3.push(imgRandom2.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img8_12: this.state.img8_12.concat(img3)
           })
        
        for (let i=12; i<16; i++){
            let imgRandom3 = this.state.images[i]
            img4.push(imgRandom3.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img12_16: this.state.img12_16.concat(img4)
           })
           
           for (let i=16; i<20; i++){
            let imgRandom4 = this.state.images[i]
            img5.push(imgRandom4.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img16_20: this.state.img16_20.concat(img5)
           })
        })                  
        }
    }

    render() {          

        const img =  this.state.img0_4.map(item =>{               
             return <img className="imgSearch" src={item} alt="img" key={item} onClick={()=>this.props.open(item)}/>
               })
        
        const img1 =  this.state.img4_8.map(item1 =>{
              
             return <img className="imgSearch" src={item1} alt="img" key={item1} onClick={()=>this.props.open(item1)}/>
                  })

        const img2 =  this.state.img8_12.map(item2 =>{
            
           return <img className="imgSearch" src={item2} alt="img" key={item2} onClick={()=>this.props.open(item2)}/>
             })
      
        const img3 =  this.state.img12_16.map(item3 =>{
              
           return <img className="imgSearch" src={item3} alt="img" key={item3} onClick={()=>this.props.open(item3)}/>
                })

        const img4 =  this.state.img16_20.map(item4 =>{
              
            return <img className="imgSearch" src={item4} alt="img" key={item4} onClick={()=>this.props.open(item4)}/>
                })
  

        return (
        <div>
            <div className="row">
              <div className="column">{img}</div> 
              <div className="column">{img1}</div> 
              <div className="column">{img2}</div> 
              <div className="column">{img3}</div> 
              <div className="column">{img4}</div> 
            </div>
            
        </div>
        )
    }
}

export default Search