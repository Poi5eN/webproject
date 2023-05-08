import React from 'react'
import logo from './logo.jpg';

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }


    return (
        
        <div class="card-group">
            <div class="card">
                <div class="card-body" style={{myStyle}}>
                    <h5 class="card-title">About Us</h5><br /><hr />
                    <p class="card-text">Om Education Welfare Society is running since 2015 for the welfare of society. It conduct the Job Course related to Anganwadi Jobs. It gives the coaching to the kids free of cost at his various centers like. Gurgaon, Faridabad, Palwal. Now started to Open the School for the welfare of poor people. So that they also can get the education on affordable price with in reach of his pockets, even free of cost too. Alpha Convent School will give the education in starting from Pre- Nursery till Middle Class. Further will extend till Intermediate. It will be English Medium as well as Hindi Medium as per requirement of Kids and Environment.</p>
                </div>
            </div>
            <div class="card">
                <img src={logo} className="imgabt" alt="not found" />
            </div>
        </div>
    )
}