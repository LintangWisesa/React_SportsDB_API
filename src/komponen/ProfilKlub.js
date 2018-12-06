import React, {Component} from 'react'
import axios from 'axios'
import lin from './../img/lin.jpg'

class ProfilKlub extends Component {
    state = {
        loading: <img alt='loading' src='https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif'/>,
        players: []
    }

    componentDidMount(){
        console.log(this.props)
        var klub = this.props.match.params.profil
        var link = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${klub}`
        axios.get(link)
        .then((x)=>{
            console.log(x.data.player)
            this.setState({
                loading: '',
                players: x.data.player
            })
        })
        .catch((x)=>{console.log(x)})
    }

    render(){

        var pemain = this.state.players.map((val, i)=>{
            var nama = val.strPlayer
            var country = val.strNationality
            var foto = val.strThumb
            var foto2 = lin 
            return (
                <div key={i} className='card col-xs-2 col-sm-2 col-md-2 col-lg-2'
                style={{width: '18rem'}}>
                    <img className='card-img-top img-thumbnail' 
                    alt='badge' src={foto ? foto : foto2 } 
                    // style={{width: '50%', height: '50%'}}
                    />
                    <div className='card-body'>
                        <h6 className='card-text'>{nama}</h6>
                        <i className='card-text'>{country}</i>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <h4 className='mb-5'>Halaman Daftar Pemain</h4>
                {this.state.loading}
                <div className='row'>
                    {pemain}
                </div>
            </div>
        )
    }
}

export default ProfilKlub