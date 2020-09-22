import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/Header';
import TabComponent from '../components/TabComponent';
import Footer from '../components/Footer';

class Main extends React.Component{
    render(){
        return(
            <div>
                 <Header />
                 <TabComponent />
                 <Footer />
            </div>
        )
    }
}

export default Main;