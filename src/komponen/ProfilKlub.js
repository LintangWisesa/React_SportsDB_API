import React, {Component} from 'react'
import axios from 'axios'

class ProfilKlub extends Component {
    state = {
        players: []
    }

    componentDidMount(){
        console.log(this.props)
        var klub = this.props.match.params.profil
        var link = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${klub}`
        axios.get(link)
        .then((x)=>{
            console.log(x.data.player)
            this.setState({players: x.data.player})
        })
        .catch((x)=>{console.log(x)})
    }

    render(){

        var pemain = this.state.players.map((val, i)=>{
            var nama = val.strPlayer
            var country = val.strNationality
            var foto = val.strThumb
            return (
                <div key={i} className='card col-xs-3 col-sm-3 col-md-3 col-lg-3'
                style={{width: '18rem'}}>
                    <img className='card-img-top img-thumbnail' 
                    alt='badge' src={foto} 
                    // style={{width: '50%', height: '50%'}}
                    />
                    <div className='card-body'>
                        <h4 className='card-text'>{nama}</h4>
                        <h4 className='card-text'>{country}</h4>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <h4>Halaman Profil Klub</h4>
                <div className='row'>
                    {pemain}
                </div>
            </div>
        )
    }
}

export default ProfilKlub