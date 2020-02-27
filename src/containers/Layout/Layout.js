import React, { Component, Suspense } from 'react';
import './Layout.css';

class Layout extends Component {
   
    render() {
        const style = this.props.mainIconImage;
        const classes = [];
        switch (style) {
            case 'Clear':
                classes.push('clear');
                break;

            case 'Clouds':
                classes.push('clouds');
                break;

            case 'Rain':
                classes.push('rain');
                break;

            case 'Some CLouds':
                classes.push('some');
                break;

            default: break;
        }

        return (
            <Suspense fallback='Loading...' >
                <header>
                    My Weather App
                </header>
                <main className={classes[0]} >
                    <div className='background' />
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