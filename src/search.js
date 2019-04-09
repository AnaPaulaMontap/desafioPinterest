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
            img0_5: [],
            img5_10: [],
            img10_15: [],
            img15_20: [],
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

        for (let i=0; i<5; i++){
            let imgRandom = this.state.images[i]
            img1.push(imgRandom.urls.thumb)
        }
        this.setState({
            ...this.state,
                img0_5: img1
           })

        for (let i=5; i<10; i++){
            let imgRandom1 = this.state.images[i]
            img2.push(imgRandom1.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img5_10: img2
           })
        
        for (let i=10; i<15; i++){
            let imgRandom2 = this.state.images[i]
            img3.push(imgRandom2.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img10_15: img3
           })
        
        for (let i=15; i<20; i++){
            let imgRandom3 = this.state.images[i]
            img4.push(imgRandom3.urls.thumb)           
        }

        this.setState({
            ...this.state,
                img15_20: img4
           })
           
        })
        
    }

    render() {             
        

        const img =  this.state.img0_5.map(item =>{
            
             return <img className="imgSearch" src={item} alt="img"/>
               })
        
        const img1 =  this.state.img5_10.map(item1 =>{
              
             return <img className="imgSearch" src={item1} alt="img"/>
                  })

        const img2 =  this.state.img10_15.map(item2 =>{
            
           return <img className="imgSearch" src={item2} alt="img"/>
             })
      
        const img3 =  this.state.img15_20.map(item4 =>{
              
           return <img className="imgSearch" src={item4} alt="img"/>
                })


        return (
        <div>
            <div className="row">
              <div className="column">{img}</div> 
              <div className="column">{img1}</div> 
              <div className="column">{img2}</div> 
              <div className="column">{img3}</div> 
            </div>
        </div>
        )
    }
}

export default Search