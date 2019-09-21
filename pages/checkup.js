import React from 'react'
import Nav from '../components/nav'
import Chart from '../components/chart/chart'
import Card from '../components/layout/card-data';

class emergencyNumber extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            card: [
                { name: "card1", img: "/static/grandfather.svg", text: "เพศชาย", url: "/mantable", hover: "one" },
                { name: "card2", img: "/static/old-woman.svg", text: "เพศหญิง", url: "/womantable", hover: "two" },
                { name: "card3", img: "/static/couple.svg", text: "รวม", url: "/totaltable", hover: "three" },]

        }
    }

    render(){
        return(
            <div className="warp-service">
                <Nav name="emergencyNumber"/>
                  <div className="content-service">
                    <h1>การตรวจสุขภาพ</h1>

                    <Card
                        card={this.state.card}
                    />

                    <Chart/>

                  </div>
                  
            </div>
        )
    }
}
export default emergencyNumber;