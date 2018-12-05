import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Beranda extends Component {
    constructor(){
        super()
        this.state = {
            klub: []
        }
    }
    componentDidMount(){
        var url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain'
        axios.get(url)
        .then((x)=>{
            this.setState({klub: x.data.teams})
            console.log(this.state.klub)
        })
        .catch((x)=>{console.log(x)})
    }
    render(){

        var galeri = this.state.klub.map((val, i)=>{
            var nama = val.strTeam
            var logo = val.strTeamBadge
            return (
                <div key={i} className='card col-xs-3 col-sm-3 col-md-3 col-lg-3'
                style={{width: '18rem'}}>
                <Link to={'/' + nama}>
                    <img className='card-img-top img-thumbnail' 
                    alt='badge' src={logo} 
                    // style={{width: '50%', height: '50%'}}
                    />
                    <div className='card-body'>
                        <h2 className='card-text'>{nama}</h2>
                    </div>
                </Link>
                </div>
                )
        })

        return(
            <div>
                <h4>Ini Beranda</h4>
                <div className='row'>{galeri}</div>
            </div>
        )
    }
}

export default Beranda