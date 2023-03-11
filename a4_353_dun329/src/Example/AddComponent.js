import React from 'react';

class AddComponent extends React.Component {

    state = {
        postTopic: '',
        postData: '',
    }
    handleChangeTopic = (event) => {
        this.setState({
            postTopic: event.target.value
        })
    }
    handleChangeData = (event) => {
        this.setState({
            postData: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.postTopic || !this.state.postData) {
            alert('Missing required params')
            return;
        }
        console.log('>>> check data input: ', this.state)
        this.props.addNewPost({
            postID: Math.floor(Math.random() * 1001),
            postTopic: this.state.postTopic,
            postData: this.state.postData
        })

        this.setState({
            postTopic: '',
            postData: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">postTopic:</label><br />
                <input
                    type="text"
                    value={this.state.postTopic}
                    onChange={(event) => this.handleChangeTopic(event)}
                />
                <br />
                <label htmlFor="lname">postData:</label><br />
                <input
                    type="text"
                    value={this.state.postData}
                    onChange={(event) => this.handleChangeData(event)}

                /><br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }

}

export default AddComponent;