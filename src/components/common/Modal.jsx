import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from 'mdbreact';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.props.isOpen} toggle={() => this.props.toggle()} size="lg">
                    <MDBModalHeader>게시글 작성</MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput label="제목을 작성해 주세요."  />
                        <MDBInput type="textarea" label="내용을 작성해 주세요." rows="5" />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={() => this.props.toggle()}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default Modal;
