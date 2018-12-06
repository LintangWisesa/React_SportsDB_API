import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Beranda extends Component {
    constructor(){
        super()
        this.state = {
            loading: <img alt='loading' src='https://loading.io/spinners/spin/lg.ajax-spinner-gif.gif'/>,
            klub: []
        }
    }
    componentDidMount(){
        var url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain'
        axios.get(url)
        .then((x)=>{
            this.setState({
                loading: '',
                klub: x.data.teams
            })
            console.log(this.state.klub)
        })
        .catch((x)=>{console.log(x)})
    }
    render(){

        var galeri = this.state.klub.map((val, i)=>{
            var nama = val.strTeam
            var logo = val.strTeamBadge
            return (
                <div key={i} className='card col-xs-2 col-sm-2 col-md-2 col-lg-2'
                style={{width: '18rem'}}>
                <Link to={'/' + nama}>
                    <img className='card-img-top img-thumbnail' 
                    alt='badge' src={logo} 
                    // style={{width: '50%', height: '50%'}}
                    />
                    <div className='card-body'>
                        <h5 className='card-text'>{nama}</h5>
                    </div>
                </Link>
                </div>
                )
        })

        return(
            <div>
                <h4 className='mb-5'>Halaman Beranda</h4>
                {this.state.loading}
                <div className='row'>{galeri}</div>
            </div>
        )
    }
}

export default Beranda