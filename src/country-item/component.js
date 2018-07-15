import React,{Component} from 'react'
import styles from './styles'

class CountryItem extends Component{

    render(){
        console.log("Props do item",this.props)
        return(
            <li style={styles.list}>              

                <p>{this.props.country.callingCodes}</p>
                <p style= {styles.name}>{this.props.country.name}</p>   
                <p style= {styles.alpha3Code}>{this.props.country.alpha3Code}</p>   
                <img style = {styles.flag} src={this.props.country.flag} alt="flag"/>

            </li>
        )
    }

}

export default CountryItem