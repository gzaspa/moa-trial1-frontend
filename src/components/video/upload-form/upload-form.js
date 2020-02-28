import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class UploadForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Control type="file" accept="image/*" name="photo" />
                <Button type="submit" variant="primary">Завантажити</Button>
            </Form>
        );
    }
}