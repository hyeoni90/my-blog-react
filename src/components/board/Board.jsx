import React, { Component } from "react";
import { bindConnects } from '../../lib/connect';

import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import Modal from "../common/Modal";

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
        this.props.boardActions.fetchBoardList();
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
                            <th>Content</th>
                            <th>Register Date</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {/*{boardList.map((board) =>*/}
                        {/*    <tr key={board.id}>*/}
                        {/*        <td>{board.id}</td>*/}
                        {/*        <td>{board.title}</td>*/}
                        {/*        <td>{board.content}</td>*/}
                        {/*        <td>{board.regDate}</td>*/}
                        {/*    </tr>*/}
                        {/*)};*/}
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

export default bindConnects(
    [{
        actionName: 'boardActions',
        storeName: 'boardStore',
    }]
)(Board);
