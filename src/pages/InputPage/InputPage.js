import React, { useState } from "react";
import { questionsRef, auth } from '../../firebase'
import { Form, Checkbox } from 'semantic-ui-react'
import "./inputpage.scss";
import { connect } from 'react-redux';
import { addQuestions } from '../../redux/actions/questions.action'

const InputPage = (props) => {
    const emptyQuestionDoc = {
        question: '',
        description: '',
        isUniversal: false,
        user: auth.currentUser.uid,
    }

    const [questionDoc, setQuestionDoc] = useState(emptyQuestionDoc)

    const onSubmit = () => {
        questionsRef
            .add(questionDoc)
            .then(() => {
                setQuestionDoc(emptyQuestionDoc)
                // TODO: after submission you should add the question doc to the redux store
                props.addQuestions([questionDoc])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="root">
            <Form onSubmit={onSubmit} className="form-container">
                <Form.Input
                    type="text"
                    label="Enter Question"
                    value={questionDoc.question}
                    onChange={(e) => setQuestionDoc({ ...questionDoc, question: e.target.value })}
                />
                <Form.TextArea
                    type="text"
                    label="Enter Description"
                    value={questionDoc.description}
                    onChange={(e) => setQuestionDoc({ ...questionDoc, description: e.target.value })}
                />
                {props.isEditor && (
                    <Form.Field>
                        <Checkbox
                            label='Show this question to all users on Ideator'
                            checked={questionDoc.isUniversal}
                            onChange={() => setQuestionDoc({ ...questionDoc, isUniversal: !questionDoc.isUniversal })} />
                    </Form.Field>
                )}
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isEditor: state.editors.isEditor,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestions: (newQuestions) => dispatch(addQuestions(newQuestions)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputPage);