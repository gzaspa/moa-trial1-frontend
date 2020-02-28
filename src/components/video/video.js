import React from 'react';
import logo from '../../assets/images/logo.svg';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import UploadForm from './upload-form';

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [
                {name: 'Реклама лідера партії', picture: 'Pict1'},
                {name: 'Реклама партії (загальна)', picture: 'Pict1'},
                {name: 'Реклама кандидата по округу 10', picture: 'Pict1'},
            ]
        }
    } 

    render() {
        return (
            <div>
                {/* <header className="App-header"> */}
                    {/* <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a> */}
                {/* </header> */}
                <Button variant="success">Завантажити нове відео</Button>
                <UploadForm />
                <section>
                    <Table bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.videos.map((value) => {
                            return <tr><td>{value.name}</td><td>{value.picture}</td></tr>
                        })}
                        </tbody>
                    </Table>
                </section>
            </div>
        );
    }
}