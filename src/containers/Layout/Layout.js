import React, { Component, Suspense } from 'react';
import './Layout.css';

class Layout extends Component {


    render() {
        return (
            <Suspense fallback='Loading...' >
                <div className='background'>
                </div>
                <header>
                    My Weather App
                </header>
                <main>
                    {this.props.children}
                    <footer>
                        <div>Saltillo</div>
                    </footer>
                </main>
            </Suspense>
        );
    }
};

export default Layout;