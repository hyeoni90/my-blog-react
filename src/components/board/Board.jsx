import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import Modal from "../common/Modal";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modal: {
                title: '',
                content: '',
            }
        };
    }

    componentDidMount() {

    }

    toggle = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    };

    render() {
        return (
            <div>
                <h3>board</h3>
                <MDBBtn onClick={() => this.toggle()}>게시글 작성</MDBBtn>
                <Modal isOpen={this.state.showModal} toggle={this.toggle}/>
                <MDBTable hover>
                    <MDBTableHead color="primary-color" textWhite>
                        <tr>
                            <th>#</th>
                            <th>Subject</th>
                            <th>Contnet</th>
                            <th>Register Date</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        )
    }
}

export default Board;
