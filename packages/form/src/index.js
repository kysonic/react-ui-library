import React from 'react';
import Input from '@react-ui-library/input';
import Button from '@react-ui-library/button';

export default function Form() {
    return (
        <form>
            <Input placeholder="Form placeholder" />
            <br/>
            <Button>Submit Form</Button>
        </form>
    )
}
